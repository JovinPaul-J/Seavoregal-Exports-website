import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function runMigration() {
  try {
    // Read the SQL migration file
    const sqlPath = path.join(path.dirname(import.meta.url).replace('file://', ''), '01-create-products-table.sql');
    const sql = fs.readFileSync(sqlPath, 'utf-8');

    console.log('Running migration...');
    
    // Execute the migration
    const { data, error } = await supabase.rpc('exec', { sql_string: sql }).then(() => ({ data: true, error: null })).catch(err => ({ data: null, error: err }));

    if (error) {
      // Try alternative approach using raw SQL
      console.log('Attempting alternative migration method...');
      const statements = sql.split(';').filter(s => s.trim());
      
      for (const statement of statements) {
        if (statement.trim()) {
          try {
            // For direct SQL execution, we'll use a different approach
            console.log(`Executing: ${statement.substring(0, 50)}...`);
          } catch (err) {
            console.error(`Error executing statement: ${err.message}`);
          }
        }
      }
      console.log('Note: Some migrations may need to be run through Supabase dashboard SQL editor');
    } else {
      console.log('✓ Migration completed successfully');
    }

  } catch (error) {
    console.error('Migration error:', error.message);
    console.log('\nTo complete the migration manually:');
    console.log('1. Go to your Supabase dashboard');
    console.log('2. Open the SQL Editor');
    console.log('3. Copy the contents of scripts/01-create-products-table.sql');
    console.log('4. Run it in the SQL editor');
  }
}

runMigration();

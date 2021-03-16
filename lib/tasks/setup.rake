task :populate_with_sample_data do
  puts 'Seeding with sample data...'
  user_details = { name: 'Oliver',
                   email: 'oliver@example.com',
                   password: 'welcome',
                   password_confirmation: 'welcome' }
  User.create! user_details
  puts 'Done! Now you can login with "oliver@example.com" using password "welcome"'
end
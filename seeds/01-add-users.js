
  exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          {name: "Sanjeev", username: 'sanjeevyg', email: "yogi.sjv@gmail.com", password_hash: "Laxmi_1"},
        ]);
      });
  };
  
'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('name', 100).notNullable()
      table.string('code', 20).unique()
      table.string('category', 300)
      table.float('price')
      table.text('short_description')
      table.text('long_description')
      table.text('image')
      table.string('father', 300)
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema

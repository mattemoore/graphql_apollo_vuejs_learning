const { DataSource } = require('apollo-datasource');
const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');
const sqlString = require('sqlstring');

class ChinookAPI extends DataSource {
  constructor() {
    super();
    sqlite3.verbose();  
  }

  async connect() {
    try {
      this.db = await sqlite.open({
        filename: './chinook.sqlite',
        driver: sqlite3.Database
      })
    }
    catch (err) {
      return console.error(err);
    } 
  }

  async close() {
    try {
      if (this.db) {
        await this.db.close();
      }
    }
    catch(err) {
      return console.error("Error closing database:" + err);
    }
  }

  async getArtists() {
    try {
      await this.connect();
      let sql = `SELECT Name name, ArtistId id FROM Artists`;
      const results = await this.db.all(sql);
      await this.close();
      return results;
    }
    catch (err) {
      return console.log(err);
    }
  }

  async getArtist(artistID) {
    try {
      await this.connect();
      let sql = `SELECT Name name, ArtistId id FROM Artists WHERE ArtistId=` + sqlString.escape(artistID);
      const results = await this.db.get(sql);
      await this.close();
      return results;
    }
    catch (err) {
      return console.log(err);
    }
  }

  async getAlbumsForArtist(artistID) {
    try {
      await this.connect();
      let sql = `SELECT Title title, AlbumId id, ArtistId artistId FROM Albums WHERE ArtistId=` + sqlString.escape(artistID);
      const results = await this.db.all(sql);
      await this.close();
      return results;
    }
    catch (err) {
      return console.log(err);
    }
  }
}
module.exports = ChinookAPI;
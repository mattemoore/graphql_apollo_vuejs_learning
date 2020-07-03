module.exports = {
  Query: {
    artists: async (_, __, { dataSources }) => {
      return await dataSources.chinookAPI.getArtists();
    },
    artist: async (_, args, { dataSources }) => {
      return await dataSources.chinookAPI.getArtist(args.artistID);
    },
    albums: async (_, args, { dataSources }) => {
      return await dataSources.chinookAPI.getAlbumsForArtist(args.artistID);
    }
  },
  Album: {
    artist: async (album, __, { dataSources }) => {
      return await dataSources.chinookAPI.getArtist(album.artistId);
    }
  }
}
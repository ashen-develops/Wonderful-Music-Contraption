export const getSongsForUser = (songs = [], userId) => (
    (!userId)
      ? songs
      : songs.filter(song => song.user_id === userId)
  )

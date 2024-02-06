export const getGifs = async (category) => {
    const apiKey = 'fe7O9v4HcvXiCmmEuVQ9PN5E8fg0XmFd'
    const url = `https://api.giphy.com/v1/stickers/search?api_key=${apiKey}&q=${category}&limit=10`
    const resp= await fetch(url)
    const {data} = await resp.json()
    
    const gifs = data.map(img=>({
      id : img.id,
      title: img.title,
      url: img.images.original.url
    }))
    console.log(gifs)    
    return gifs    
}
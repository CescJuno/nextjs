  
export default async (req, res) => {
    const userData = {
      joonho: 'https://github.com/CescJuno'
    }
    setTimeout(() => {
      if (userData[req.params.id] === undefined) {
        res.send('Not Found!')
      } else {
        res.send(userData[req.params.id])
      }
    }, 1000)
  }
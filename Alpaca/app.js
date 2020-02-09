

async function assets(){
    const results = await fetch('https://paper-api.alpaca.markets/v2/assets', {
        'method': 'GET',
        'headers': {
        'content-type': 'application/json',
          'APCA-API-KEY-ID': 'PKFST4BWAQCKEWRG4C2E',
          'APCA-API-SECRET-KEY': 'fKymrelGL/30dnbQT2fsF1QHJhoRGc1EfehzMdBq'
        }
      })
      const json = await results.json()
      return json
}

async function bars(){
    const results = await fetch('https://paper-api.alpaca.markets/v1/bars', {
        'method': 'GET',
        'headers': {
          'content-type': 'application/json',
          'APCA-API-KEY-ID': 'PKFST4BWAQCKEWRG4C2E',
          'APCA-API-SECRET-KEY': 'fKymrelGL/30dnbQT2fsF1QHJhoRGc1EfehzMdBq'
        }
      })
      const json = await results.json()
      return json
}

async function account(){
    const results = await fetch('https://paper-api.alpaca.markets/v2/positions', {
        'method': 'GET',
        'headers': {
          'content-type': 'application/json',
          'APCA-API-KEY-ID': 'PKFST4BWAQCKEWRG4C2E',
          'APCA-API-SECRET-KEY': 'fKymrelGL/30dnbQT2fsF1QHJhoRGc1EfehzMdBq'
        }
      })
      const json = await results.json()
      return json
}

let data = bars()
console.log(data)
const getData = async () => {
    const requestData = new FormData()

    requestData.append('name', 'al')

    const resp = await fetch('https://swapi.dev/api/planets', {
        method: 'POST',
        body: requestData
    })

    const data = await resp.json()

    console.log(data, 123)

    console.log('second')
}

getData()
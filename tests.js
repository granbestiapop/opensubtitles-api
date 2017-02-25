var OS = require('./index.js')
var UA = 'OSTestUserAgentTemp'
var imdb = '0898266', show = 'The Big Bang Theory', s = '01', ep = '01'
var hash = '8e2264d390e150a9'

var os, test

test = 'http client'
os = new OS({
    useragent: UA,
    ssl: false
})
console.time(test)
os.api.ServerInfo().then(() => {
    console.timeEnd(test)

    test = 'https client'
    os = new OS({
        useragent: UA,
        ssl: true
    })
    console.time(test)
    return os.api.ServerInfo()
}).then(() => {
    console.timeEnd(test)

    test = 'search'
    console.time(test)
    return os.search({
        season: s,
        episode: ep,
        imdbid: imdb,
        limit: 'all'
    })
}).then(() => {
    console.timeEnd(test)
    console.log('Passed test.')
}).catch((err) => {
    console.log('Test failed')
    console.log(err)
})
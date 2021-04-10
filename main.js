Parse.Cloud.job("go" , async(request) => {
	const CoinGecko = require('coingecko-api');
	const axios = require('axios');
	const CoinGeckoClient = new CoinGecko();
	let data = await CoinGeckoClient.exchanges.fetchTickers('bittrex', {
        		coin_ids: ['hive']
    	});
    	var _coinList = {};
    	var _datacc = data.data.tickers.filter(t => t.target == 'USD');
    	[
        		'HIVE'
    	].forEach((i) => {
        	var _temp = _datacc.filter(t => t.base == i);
        	var _res = _temp.length == 0 ? [] : _temp[0];
        		_coinList[i] = _res.last;
    	})
	console.log(_coinList);
	let x = _coinList.HIVE;
	const chewOnThat = await axios.post( 'https://openhive.chat/api/v1/chat.postMessage/', { channel: '#general', text: 'Beep Beep!! Boop Boop!! Daily Hive Price: '  +  x  + ' data from [coingecko](https://coingecko.com)' }, {
		headers: {
			'X-Auth-Token': '7ye4FfrMCAzbopv9YoXyyN7Yx2sz3ytoZBfHg_G2OvU',
			'X-User-Id': '4A6hiCAcLqCpFRXgu'
		}
	});
	chewOnThat;
});

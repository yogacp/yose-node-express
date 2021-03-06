var minesweeper = function(request, response) {
	var table_content = "",
		data = [
			['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
			['bomb', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
			['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
			['bomb', 'empty', 'empty', 'bomb', 'empty', 'empty', 'empty', 'empty'],
			['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
			['empty', 'empty', 'empty', 'empty', 'bomb', 'empty', 'empty', 'empty'],
			['empty', 'empty', 'bomb', 'empty', 'bomb', 'bomb', 'empty', 'empty'],
			['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'bomb', 'empty'],
		];

	for(var i = 0; i < data.length; i++){
		table_content += "<tr>";
		for(var j = 0; j < data.length; j++){
			var lost = data[i][j] == 'bomb' ? 'lost' : ''; 
			var n = i + 1,
				p = j + 1;
			table_content += "<td id='"+n+"x"+p+"' class='"+lost+"'>Cell - "+n+"x"+p+"</td>";
		}
		table_content += "</tr>";
	}

	response.setHeader('Content-Type', 'text/html');
	response.render('minesweeper.html',{table_content:table_content,data:data});
};

module.exports = minesweeper;
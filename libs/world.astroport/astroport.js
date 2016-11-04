var astroport = function(request, response) {
    response.setHeader('Content-Type', 'text/html');

    response.render('astroport.jade',{astroportname: 'Sembarang'});
    //response.render('astroport',{id : 'astroport-id'});
};

module.exports = astroport;
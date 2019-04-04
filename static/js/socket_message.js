socket.on('message', function (test) {
    console.log('Ouve aki ' + test);
    if (test == 0) {
        plots.forEach(function (plot) {
            plot.setIcon(myIcon1);
            plot._popup.setContent('test')                    

        })
    }
    else {
        plots.forEach(function (plot) {
            plot.setIcon(myIcon2);
            plot._popup.setContent('testo')                    

        })
    }
})
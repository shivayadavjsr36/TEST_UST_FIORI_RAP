sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'trav/ust/spy/travelproc/test/integration/FirstJourney',
		'trav/ust/spy/travelproc/test/integration/pages/TravelList',
		'trav/ust/spy/travelproc/test/integration/pages/TravelObjectPage',
		'trav/ust/spy/travelproc/test/integration/pages/BookingObjectPage'
    ],
    function(JourneyRunner, opaJourney, TravelList, TravelObjectPage, BookingObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('trav/ust/spy/travelproc') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTravelList: TravelList,
					onTheTravelObjectPage: TravelObjectPage,
					onTheBookingObjectPage: BookingObjectPage
                }
            },
            opaJourney.run
        );
    }
);
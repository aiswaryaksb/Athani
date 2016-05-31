
module. exports = {

	index : function index(req,res) {
		return res.view();
	},
	adminlogin : function adminlogin(req,res) {
		return res.view();
		//var searchCriteria={}
        /*sails.models.home.find(searchCriteria, function foundAllRecords(err, foundRecords) {
        console.log(foundRecords);
        return res.view ( {
        	User: foundRecords
        });
        }); */   
	}

};


module. exports = {

	maternal: function maternal (req,res) {
		return res.view();
	},
	donate: function donate (req, res) {
		return res.view();
		var searchCriteria={}
        sails.models.maternal.find (searchCriteria, function foundAllRecords(err, foundRecords) {
        console.log(foundRecords);
        return res.view ({
        	home: foundRecords
        });
 
        }); 
    },
    create: function create(req, res) {
		var firstname= req.param('firstname');
		console.log(firstname);
	    var lastname= req.param('lastname');
	    console.log(lastname);
	    var mailid = req.param('mailid');
	    console.log(mailid);
	    var phoneno = req.param('phoneno');
	    console.log(phoneno);
	    var amount= req.param('amount');
	    console.log(amount);
	    var accountno= req.param('accountno');
	    console.log(accountno);
	    var ifsccode= req.param('ifsccode');
	    console.log(ifsccode);
		var record={ 
			Firstname: firstname, Lastname: lastname, Mailid: mailid, Phoneno: phoneno ,Amount: amount ,Accountno : accountno, Ifsccode : ifsccode
		};
		sails.models.maternal.create(record, function userRecordCreated(err, CreateRecord) {
			if(err) {
				console.log(err);
			return res.ServerError(err);
		}
		    return res.view('maternal/create');
			
		});
	},
	response : function response(req, res) {
          return res.view();
	},
	involved: function involved(req, res) {  
		//get updates
		//voluteer
		//host an event
		//return res.redirect('/home/Maternal_Health/Get_Involved/login');  //or go to signin
		return res.view();
	},
	volunteer : function voluteer(req, res) {
		return res.view();
	},
	host: function host(req, res) {
		return res.view();
	},
	signin: function signin(req, res) {
		var searchCriteria={}
        sails.models.maternal.find(searchCriteria, function foundAllRecords(err, foundRecords) {
        console.log(foundRecords);
        return res.view ( {
        	User: foundRecords
        });
        });    

	},
	processSignin: function processSignin(req, res) {
		var firstname= req.param('firstname');
		var lastname=req.param('lastname');
	    var password= req.param('password');
	    var mailid= req.param('mailid');
	    console.log(firstname);
		var record={ 
			Firstname: firstname, Lastname: lastname, Password: password , Mailid: mailid
		};
		sails.models.maternal.create(record, function userRecordCreated(err, CreateRecord) {
			if (err) {
			return res.ServerError(err);
		}
			return res.send(200,'You are now a registered user');
		});
	},
		login: function login (req, res) {
		return res.view();
		//if(req.session.isAuthenticated) {
		//	return res.redirect('/user/dashboard');
		//} else {
			//return res.view();

		//}
	},
	create1: function create1(req,res) {



		
		var password= req.param('password');
		var mailid= req.param('mailid');
		console.log(mailid);
		var searchCriteria = {
			Password: password,
			Mailid :mailid
		};
		sails.models.maternal.findOne(searchCriteria, function findRecord( err,foundRecord) {
         if(err) {
         	return res.send(500, 'error whiole logging in');
         } else {
         	if(!foundRecord) {
              //no records found
              return res.send(401, 'incorrect username /password');
         	} else {
              //records found
              req.session.isAuthenticated=true;
              req.session.Mailid=mailid;
              req.session.userID=foundRecord.id;
              return res.send(200, 'Sign in Successful. Welcome' );
             
         	}
         
         }
		});
	},
	
	contact: function contact (req, res) {
		return res.view();

	}

};


module. exports = {

	child: function child (req,res) {
		return res.view();
	},
	donate1: function donate (req, res) {
		return res.view();
		var searchCriteria={}
        sails.models.child.find (searchCriteria, function foundAllRecords(err, foundRecords) {
        console.log(foundRecords);
        return res.view ({
        	home: foundRecords
        });
 
        }); 
    },
    create1: function create(req, res) {
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
		sails.models.child.create(record, function userRecordCreated(err, CreateRecord) {
			if(err) {
				console.log(err);
			return res.ServerError(err);
		}
		    return res.view('child/create');
		});
	},
	response : function response(req, res) {
          return res.view();
	},
	involved1: function involved(req, res) {  
		//get updates
		//voluteer
		//host an event
		//return res.redirect('/home/child_Health/Get_Involved/login');  //or go to signin
		return res.view();
	},
	volunteer1 : function voluteer(req, res) {
		return res.view();
	},
	host1: function host(req, res) {
		return res.view();
	},
	signin1: function signin1(req, res) {
		var searchCriteria={}
        sails.models.child.find(searchCriteria, function foundAllRecords(err, foundRecords) {
        console.log(foundRecords);
        return res.view ( {
        	User: foundRecords
        });
        });    

	},
	processSignin1: function processSignin1(req, res) {
		var firstname= req.param('firstname');
		var lastname=req.param('lastname');
	    var password= req.param('password');
	    var mailid= req.param('mailid');
	    console.log(firstname);
		var record={ 
			Name: name, Password: password , Mailid: mailid
		};
		sails.models.child.create(record, function userRecordCreated(err, CreateRecord) {
			if (err) {
			return res.ServerError(err);
		}
			return res.send(200,'You are now a registered user');
		});
	},
		login1: function login1 (req, res) {
		return res.view();
		//if(req.session.isAuthenticated) {
		//	return res.redirect('/user/dashboard');
		//} else {
			//return res.view();

		//}
	},
	create11: function create11(req,res) {
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
		/*var username= req.param('username');
		var password= req.param('password');
		var mailid= req.param('mailid');
		var searchCriteria = {
			Username: username,
			Password: password,
			Mailid :mailid
		};
		sails.models.child.findOne(searchCriteria, function findRecord( err,foundRecord) {
         if(err) {
         	return res.send(500, 'error whiole logging in');
         } else {
         	if(!foundRecord) {
              //no records found
              return res.send(401, 'incorrect username /password');
         	} else {
              //records found
              return res.send(200, 'Sign in Successful.Welcome' + username);
             
         	}
         
         }
		});
	},*/
	
	contact: function contact (req, res) {
		return res.view();

	}

};
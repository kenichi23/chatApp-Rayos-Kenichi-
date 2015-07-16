Template.appChat.helpers({

	messages : function ()
	{
		return Messages.find({},{sort: {createdAt: -1}, limit: 10})
	}
});



Template.appChat.events({

	"click .btnDelete": function (event)
	{
		Messages.remove(this._id);
		return false; 
	},
	"keyup .txtMotto": function (event){

		if (event.keyCode == 13) {
			Messages.insert({
				last: $(".txtLast").val(),
				first: $(".txtFirst").val(),
				middle: $(".txtMiddle").val(),
				age: $(".txtAge").val(),
				cy: $(".txtCY").val(),
				motto: $(".txtMotto").val(),
				createdAt: new Date()

			});
			last: $(".txtLast").val("");
			first: $(".txtFirst").val("");
			middle: $(".txtMiddle").val("");
			age: $(".txtAge").val("");
			cy: $(".txtCY").val("");
			motto: $(".txtMotto").val("");
			last: $(".txtLast").focus();
		}

		return false;
	}
});
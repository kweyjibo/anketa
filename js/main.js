$( document ).ready(function() {

	function MyHobbies(obj) {
		var self = this;
		this.text = obj.find('.bForm__eInput');
		this.list = obj.find('.bForm__eList');

		this.text.keydown(function(event) {
			if (event.keyCode == 13  && self.text.val() != '') {
				self.addHobby(self.text.val());
				self.text.val('');
			}
		});

		this.list.on('click', '.bForm__eDelete', function(){
			$(this).parents('.bForm__eListLi').remove();
		})
	}

	MyHobbies.prototype.addHobby = function(hobbyName) {
		this.list.prepend('<li class="bForm__eListLi"><span class="bForm__eListLiText"><span class="bForm__eDelete"></span>'+hobbyName+'</span></li>');
	}

	function FriendHobbies(obj, myHobbies) {
		var self = this;
		this.formPopup = $('.bFormReport');

		obj.find('.bForm__eAdd').click(function() {

			var parent = $(this).parents('.bForm__eListLi');

			myHobbies.addHobby(parent.find('.bForm__eListLiText').text());
			parent.find('.bForm__eAdd').remove();
			parent.find('.bForm__eListLiText').append('<span class="bSuccess__eInfo"><i></i>добвлено в ваши увлечения</span>');
		});

		obj.find('.bForm__eReport').click(function(){
			self.formPopup
				.fadeIn(300)
				.find('.bFormReport__eTextarea').val(
					$(this).prev().find('.bForm__eListLiHobby').text() + ','
				)
				.focus();
		})

	}

	var myHobbies = new MyHobbies($('.bForm__eInnerMyHobbies'));
	new FriendHobbies($('.mForm__eInnerFriendHobbies'), myHobbies);

	$('.bForm__eShowHobbies').click(function(){
		$(this).parents('.bForm__eList').find('.bForm__eListLiHidden').removeClass('bForm__eListLiHidden');
		$(this).remove();
		return false;
	})

	alert('Hello');

});
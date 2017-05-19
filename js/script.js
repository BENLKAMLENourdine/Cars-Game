$(function(){
    //alert("hello");
    //$('#box').css("color","red");
   /* $("button").click(function(){
        $('#box').fadeOut(2000);   
    });*/
    
    
    //$('h1, h2').css("color","red");
   // $(':header').css("border","solid 1px red");
    // $('div#container').css("border","solid 1px red");
    // $('li:even').css("border","solid 1px red");
    // $('p:even').css("border","solid 1px red");
    // $('p:odd').css("border","solid 1px red");
    // $('body:contains("Brad")').css("border","solid 1px red");
   /* 
    $("#box").click(function(){
        alert("you clicked the box");  
    });
    $("input").blur(function(){
        if($(this).val() == ""){
            $(this).css("border","solid 1px red");
            $("#box").text("forgot to add text");
        }
    });
    
    $("input").keydown(function(){
        if($(this).val() !== ""){
            $(this).css("border","solid 1px #777");
            $("#box").text("thanks for that");
        }
    });
    
    $("#box").hover(function(){
            $(this).text("you hovered in");
    },function(){
        $(this).text("you hovered out");
    });
    
    $(".notification").delay(1000).slideDown().delay(1000).fadeOut();*/
    
    //$('h1').hide();
    //$('div.hidden').show();
    //$('div.hidden').fadeIn(8000);
    
   /* $('#box1').click(function(){
        $(this).fadeTo(2000,0.25,function(){
            $(this).slideUp();
            $('div.hidden').slideDown();
        });
    });
    */
    
    /*$('button').click(function(){
       $('#box1').slideToggle(); 
    });*/
    
    
    
    
    
    
    
    
    
    /*
    $('#left').click(function(){
      $('.box').animate({
        left:"-=40px",
          fontSize:"+=2px"
    },function(){
        
    });
    });
    
    $('#up').click(function(){
      $('.box').animate({
        top:"-=40px",
          opacity:"+=0.1"
    },function(){
        
    });
    });
    
    $('#right').click(function(){
      $('.box').animate({
        left:"+=40px",
          fontSize:"-=2px"
    },function(){
        
    });
    });
    
    $('#down').click(function(){
      $('.box').animate({
        top:"+=40px",
          opacity:"-=0.1"
    },function(){
        
    });
    });
    
    
    
    
    
    */
    
    
    
    /*
    $('#circle2').css({
        'background':'#8a8d22',
        'display' : 'inline-block',
        'color': 'white',
        'text-align': 'center',
        'line-height': '140px',
        'height': '140px',
        'width': '140px',
        'margin': '40px'
    }).addClass('circleShape');
    */
    
    function checkComplete(){
        if(isComplete == false)
            isComplete = true;
        else
            place = 'second';
    }
    
    var carWidth = $('#car1').width();
    var roadWidth = $(window).width() - carWidth;
    
    var speedCar1 = Math.floor((Math.random() * 5000) + 1);
    var speedCar2 = Math.floor((Math.random() * 5000) + 1);
    
    var place = 'first';
    var isComplete = false;
    
    $('#go').click(function(){
        
        $('#car1').animate({
           left : roadWidth 
        },speedCar1,function(){
            
            checkComplete();
            
            $('#raceInfo1 span').text('Finished in '+ place +' place and clocked in at '+ speedCar1 +' milliseconds');
        });
         
    });
    
    $('#go').click(function(){
        
        $('#car2').animate({
           left : roadWidth 
        },speedCar2,function(){
            checkComplete();
            $('#raceInfo2 span').text('Finished in '+ place +' place and clocked in at '+ speedCar2 +' milliseconds');
        });
         
    });
    
    $('#reset').click(function(){
        $('.car').css('left','0');
        $('span').text('');
    });
    
});
var zoneArray = $('.zone');
var buttonArray = [];
var descArray = [];
var zoneNumber;

$(document).ready(function(){
    buildElmt();
    setCoord();
    initDesc();
});
//keep the right size of mask when user resizes the window
$(window).on('resize', function(){
    //if the mask is already active
    if($('.container .mask').css('opacity') === 1){
        displayMask($(zoneArray[zoneNumber]));
    }
    setCoord();
});
$(zoneArray).on('mouseover', function(){
    zoneNumber = $(this).index() - 2;
    $(buttonArray).removeClass('active');
    displayMask($(this));
});
$(document).on('click', function(event){
    if(!$(event.target).hasClass('zone') && $.inArray(event.target, buttonArray) === -1){
        hideMaskInterface();
    }
});
$(zoneArray).on('mouseleave', function(){
    $(zoneArray).removeClass('disable');
    $(this).removeClass('focused');
    hideMaskInterface();
});
function activeButton(elmt){
    $(buttonArray).removeClass('active');
    elmt.addClass('active');
}
//function to set coords to all clickable zone
function setCoord(){
    for(var i = 0; i < zoneArray.length; i++){
        $(zoneArray[i]).css({
            top:$(zoneArray[i]).data('top'),
            left:$(zoneArray[i]).data('left')
        });
        $(descArray[i]).css({
            top:$(zoneArray[i]).data('top'),
            left:$(zoneArray[i]).data('left'),
            margin:'0 0 0 5%'
        });
        var leftTotal = parseInt($(descArray).css('margin-left'), 10 ) + parseInt($(descArray[i]).css('left'), 10 ) + parseInt($(descArray[i]).css('width'), 10 );

        if(leftTotal >= ($('.container-interface').outerWidth() - 150)){
            $(descArray[i]).css({
                left:(parseInt($(zoneArray[i]).data('left')) - 10) + '%',
                margin:'5% 5% 0 0'
            });
        }
        if(leftTotal >= ($('.container-interface').outerWidth())){
            $(descArray[i]).css({
                top:(parseInt($(zoneArray[i]).data('top')) - 5) + '%',
                left:(parseInt($(zoneArray[i]).data('left')) - 40) + '%',
                margin:'0 5% 0 0'
            });
        }

        var topTotal = parseInt($(descArray).css('margin-top'), 10 ) + parseInt($(descArray[i]).css('top'), 10 ) + parseInt($(descArray[i]).css('height'), 10 );
    }
}
//function to call to display the mask
function displayMask(elmt){
    $('.container-interface .mask').css({
        // 'background':'radial-gradient(circle '+$(elmt).width() / 1.6+'px at '+$(elmt).data('left')+' '+$(elmt).data('top')+', transparent 80%, rgba(0, 0, 0, 0.5) 85%)',
        'opacity':'1'
    });
    $(descArray).addClass('hidden-interface');
    $(descArray[elmt.index() - 2]).toggleClass('hidden-interface', 'visible');
    $(buttonArray[elmt.index() - 2]).addClass('active');
    $(zoneArray).addClass('disable');
    $(zoneArray).removeClass('focused');
    elmt.addClass('focused');

    $(descArray[elmt.index() - 2]).on('mouseover', function(){
        $(this).addClass('visible');
    });
    $(descArray[elmt.index() - 2]).on('mouseout', function(){
        $(this).removeClass('visible');
    });


}
//build button to target zone on click
function buildElmt(){
    for(var i = 0; i < zoneArray.length; i++){
        jQuery('<button/>',{
            'data-index': i,
            onclick : 'displayMask($(zoneArray[$(this).data("index")])); activeButton($(this))'
        }).appendTo('.buttons-container');
        jQuery('<div/>',{
            class : 'desc hidden-interface'
        }).appendTo('.container-interface');
        buttonArray = $('button:not(.toggle-nav, .btn-interface)');
        descArray = $('.desc');
        $(buttonArray[i]).addClass('new-btn btn-classic btn-grey').text($(zoneArray[i]).data('name'));
    }
}

//function to disable the dark mask
function hideMaskInterface(){
    $('.container-interface .mask').css({
        'opacity' : '0'
    });
    $(descArray).addClass('hidden-interface');
    $(zoneArray).removeClass('disable');
    $(zoneArray).removeClass('focused');
    $(buttonArray).removeClass('active');
}

//get zone description and put it desc boxes
function initDesc(){
    for(var i = 0; i < zoneArray.length; i++){
        $(descArray[i]).html($(zoneArray[i]).html());
        $(zoneArray[i]).text('');
    }
}
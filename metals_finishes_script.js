/**
 * Created by Ashish Goyal on 6/14/2017.
 */
$(document).ready(function(){

    $('#itemslider,#finishes-slider').carousel({ interval: 3000 });

    $('.carousel-showmanymoveone .item').each(function(){
        var itemToClone = $(this);

        for (var i=1;i<6;i++) {
            itemToClone = itemToClone.next();

            if (!itemToClone.length) {
                itemToClone = $(this).siblings(':first');
            }

            itemToClone.children(':first-child').clone()
                .addClass("cloneditem-"+(i))
                .appendTo($(this));
        }
    });
});

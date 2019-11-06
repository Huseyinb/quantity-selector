(function ($) {
    $.fn.createQauntity = function (parameters) {
        var options = $.extend({
                inputClass: "",
                id: "",
            },
            parameters
        ); // yukarıda kullanacağımız secenekler değerini burada atıyoruz. extend uzantısında
        $(this).append(
            '<div class="quantity-wrapper"><input class="quantity-input ' + options.inputClass +
            '" /><div class="quantity-box "><ul></ul></div></div>'
        );

        $.each(options.id, function (index, value) {
            $('.quantity-wrapper').find('ul').append('<li id="' + value + '">' +
                '<div class="text-box">' +
                '<p class="quantity-text"></p>' +
                '<p class="quantity-subtext"></p>' +
                '</div>' +
                '<div class="qty-box">' +
                '<span class="inc">+</span>' +
                ' <span class="qty">0</span>' +
                ' <span class="dec">-</span>' +
                '</div' +
                '</li>');
        });

    };

    $.fn.quantity = function (
        parameters) { //seçenekleri kullanabilmesi için secenekler tanımını çağırıyoruz
        var options = $.extend({
                // Varsayılan renk değerimiz.
                text: "",
                subText: "",
                textcolor: "#484848",
                subtextcolor: "#484848",
                setDefaultValue: "0",
                setLowLimit: "0",
                setTopLimit: "100"
            },
            parameters
        ); // yukarıda kullanacağımız secenekler değerini burada atıyoruz. extend uzantısında
        this.find('.quantity-text').html(options.text);
        this.find('.quantity-subtext').html(options.subText);
        this.find('.quantity-text').css("color", options.textcolor);
        this.find('.quantity-subtext').css("color", options.subtextcolor);
        this.find('.qty').html(options.setLowLimit);


        if (parseInt(options.setLowLimit) > parseInt(options.setDefaultValue)) {
            $(this).find('.qty').html(options.setLowLimit);
        } else if (parseInt(options.setTopLimit) < parseInt(options.setDefaultValue)) {
            $(this).find('.qty').html(options.setTopLimit);
        } else {
            $(this).find('.qty').html(options.setDefaultValue);
        }

        if (parseInt($(this).find('.qty').html()) <= options.setLowLimit) {
            $(this).find('.dec').addClass("qty-disabled");
        }
        if (parseInt($(this).find('.qty').html()) >= options.setTopLimit) {
            $(this).find('.inc').addClass("qty-disabled");
        }
        if (parseInt($(this).find('.qty').html()) > options.setLowLimit) {
            $(this).find('.dec').removeClass("qty-disabled");
        }
        if (parseInt($(this).find('.qty').html()) < options.setTopLimit) {
            $(this).find('.inc').removeClass("qty-disabled");
        }


        $(this).find('.qty').on('DOMSubtreeModified', function () {
            if (parseInt($(this).html()) <= options.setLowLimit) {
                $(this).parent().find('.dec').addClass("qty-disabled");
            }
            if (parseInt($(this).html()) >= options.setTopLimit) {
                $(this).parent().find('.inc').addClass("qty-disabled");
            }
            if (parseInt($(this).html()) > options.setLowLimit) {
                $(this).parent().find('.dec').removeClass("qty-disabled");
            }
            if (parseInt($(this).html()) < options.setTopLimit) {
                $(this).parent().find('.inc').removeClass("qty-disabled");
            }
        });



        $(this).find(".inc").click(function () {
            if (parseInt($(this).parent().find(".qty").html()) < options.setTopLimit) {
                var num = +parseInt($(this).parent().find(".qty").html()) + 1;
                $(this).parent().find(".qty").html(num);
            }
        });

        $(this).find(".dec").click(function () {
            if (parseInt($(this).parent().find(".qty").html()) > options.setLowLimit) {
                var num = +parseInt($(this).parent().find(".qty").html()) - 1;
                $(this).parent().find(".qty").html(num);
            }

        });

        $('.quantity-input').click(function () {
            if (!$('.quantity-box').hasClass('show')) {
                $('.quantity-box').addClass('show');
            }
        });
        $(document).click(function (event) {

           

        });

        $(document).click(function (e) {
            if (!$(e.target).parents('.quantity-box').length > 0  && !$('.quantity-input').is(e.target)){
                    $('.quantity-box').removeClass('show');
            }
        });
        return parameters; //secenek.renk değeri tanımımızdaki varsayılanı çekiyor, şayet eklenti için belirlenirse onu çekicek
    };

    $.fn.qVal = function () {
        var val = $(this).find('.qty').html();
        return val;
    };



}(jQuery));
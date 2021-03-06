

//*******************************************************************************
//* Copyright (c) 2012 Payoda Technologies Pvt Ltd
//* All rights reserved. This program and the accompanying materials
//* are made available under the terms of the Eclipse Public License v1.0
//* which accompanies this distribution, and is available at
//* http://www.eclipse.org/legal/epl-v10.html
//*******************************************************************************

(function ($) {
    var isfirstTime = true;
    var message;
    var title;
    var header;
    var modalEvents;
    var eventHandlerIndex = 1;
    $.fn.Dialog = function (settings) {
        var configs = {
            'body': 'message',
            'header': 'header',
            'title': 'title',
            buttons: undefined
        };


        if (settings) {
            $.extend(configs, settings);
        };
        var modalFooter = "<a href='#' class='btn' data-dismiss='modal' title='Dismiss the dialog'>Close</a>";
        if (configs["buttons"] != undefined) {
            modalFooter = "";

            modalEvents = "<script type='text/javascript'>";
            $.each(configs["buttons"], function (key, value) {
                modalFooter += "<a href='#'  class='btn btn-primary' data-dismiss='modal' id=Sample" + eventHandlerIndex + key + " >" + key + "</a>";
                modalEvents += "$('#Sample" + eventHandlerIndex + key + "').click(" + value + ");";
            });
            modalEvents += "</script>";
            eventHandlerIndex += 1;
        }
        
        modalFooter += "</div>";
        message = configs['body'];
        title = configs['title'];
        header = configs['header'];
        if (isfirstTime) {
            $("body").append("<div id='sample' title='" + title + "' style='display: none' class='modal fade'><div class='modal-header' id='mod-header'><a class='close' data-dismiss='modal' title='Close'><i class='icon-remove'></i></a><h3>                </h3>        </div>        <div class='modal-body' id='mod-body'>            <p>                            </p>        </div><div class='modal-footer' id='mod-footer'> " + modalFooter + "</div>");
            isfirstTime = false;
        }

        $('#mod-body').html(message);
        $('#mod-footer').html(modalFooter);
        $("body").append(modalEvents);
        $('#mod-header').html("<a class='close' data-dismiss='modal' title='Close'><i class='icon-remove'></i></a><h3>" + header + "</h3>");
        $('#sample').attr('title', title);
        $('#sample').modal('show');
    };
})(jQuery);

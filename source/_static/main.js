/**
 * Created by kokdemo on 14-4-20.
 */
jQuery(document).ready(function($) {
var storage = window.localStorage;
    if (!storage.getItem("pageCount")) storage.setItem("pageCount",0);
        storage.pageCount = parseInt(storage.getItem("pageCount")) + 1;//必须格式转换


$("#attation").html("你已经访问了这个文档"+storage.pageCount+"次，有没有什么收获呢？");});
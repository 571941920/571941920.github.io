/*
 * @Author: your name
 * @Date: 2021-10-20 12:58:01
 * @LastEditTime: 2021-10-20 12:58:15
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \undefinedc:\Users\57194\Desktop\Blog\themes\hexo-theme-matery\source\libs\codeBlock\codeShrink.js
 */
// 代码块收缩
$(function () {
    var $code_expand = $('<i class="fa fa-angle-down code-expand" aria-hidden="true"></i>');
  
    $('.code-area').prepend($code_expand);
    $('.code-expand').on('click', function () {
      if ($(this).parent().hasClass('code-closed')) {
        $(this).siblings('pre').find('code').show();
        $(this).parent().removeClass('code-closed');
      } else {
        $(this).siblings('pre').find('code').hide();
        $(this).parent().addClass('code-closed');
      }
    });
  });
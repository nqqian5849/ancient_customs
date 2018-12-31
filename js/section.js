
$(function(){
    /* floor_four */ 
    //选中元素已显示,则隐藏
    $(".ac_content:gt(0 )").hide();
    $(".accordion").on("click",".ac_title",function(){
        var $title = $(this);
        if($title.next().is(":visible"))
            $title.next().slideUp();
        else{
            $title.next().slideDown().siblings(".ac_content").slideUp();
        }
    });
    function task(){
        var $img_1 =  $("#right_img").children(":first-children");
        $img_1.className="show";
        $img_1.className="";
        if($img_1.next())
        $img_1.next().className="show";
        else
        $img_1.className="show";
    }
        setInterval(task,2000);
    

});

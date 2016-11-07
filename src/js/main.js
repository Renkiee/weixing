/**
 * Created by Administrator on 2016/10/19.
 */
require.config({
    baseUrl:"js/",
    paths:{
       sp:"swiper",
        th:"touch",
       sa: "swiper.animate1.0.2.min",
        fl:"flexible",
        fc:"flexible_css",
        in:"index"
    },
    shim:{ // ͨ�� shim ���������ѷ� AMD ��д��ģ��תΪ AMD ��ģ��
        'sp':{
            exports:"sp"
        },
        'sa':{
            deps:["sp"], // ��������ģ��
            exports:"sa"
        },
        'th':{
            exports:"th"
        },
        'fl':{
            exports:"fl"
        },
        'fc':{
            exports:"fc"
        },
        'in':{
            exports:"in"
        }
    }
});
require(["sp","sa","th","fl","fc","in"],function(s,a,c,l,f,i){
    var swiper = new s(".swiper-container",{
        "direction":"vertical",
        pagination:".swiper-pagination",
        onInit: function(swiper){ //Swiper2.x�ĳ�ʼ����onFirstInit
            swiperAnimateCache(swiper); //���ض���Ԫ��
            swiperAnimate(swiper); //��ʼ����ɿ�ʼ����
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //ÿ��slide�л�����ʱҲ���е�ǰslide����
        }
    })
});
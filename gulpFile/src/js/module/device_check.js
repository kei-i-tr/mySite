function device() {
    var ua = navigator.userAgent;
    console.log('device');
    if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
        return 'mobile';
    } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
        return 'tablet';
    } else {
        return 'desktop';
    }
}

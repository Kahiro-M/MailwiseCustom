$(function() {
    // --------------------------------------------
    // 外部CSS（Googleのアイコン）読み込み処理
    // --------------------------------------------
    var link_style = $('<link>').attr({
        'rel': 'stylesheet',
        'href': 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
    });
    $('body').append(link_style);


    // --------------------------------------------
    // すべての画面共通での処理
    // --------------------------------------------
    // ヘッダーの上部に文字列追加
    $('head').before('<div class="custom" id="common">全ページ共通</div>');
    // ヘッダーの色変更
    $('header.headbar').css('background-color', '#b00')

    // --------------------------------------------
    // フォルダのカスタマイズ
    // --------------------------------------------
    // フォルダの文字色等変更
    $('.category-item a:contains("フォルダ名")').css( "color", "red" );
    // フォルダのアイコン変更（送信メールアイコン：サイボウズのSVG）
    $('.category-item a:contains("フォルダ名") img').attr('src','https://static.cybozu.com/m/5.4.7_23.1_16896/image/mail_sent20.svg')
    // 既存のアイコン削除
    $('.category-item a:contains("フォルダ名") img').attr('src','');
    // goolgeアイコン追加（support_agentのアイコン）
    // https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Asupport_agent%3AFILL%400%3Bwght%40700%3BGRAD%400%3Bopsz%4048
    $('.category-item a:contains("フォルダ名") img').before('<span class="material-symbols-outlined">support_agent</span>')



    // --------------------------------------------
    // メール詳細画面での処理
    // --------------------------------------------
    if (mw.PAGE == "MailView") {
        // ヘッダーの上部に文字列追加
        $('div#common.custom').before('MailView　メール詳細ページ');
        $('div#common.custom').remove();
        // ヘッダーの色変更
        $('header.headbar').css('background-color', '#0b0')
    }



    // --------------------------------------------
    // 送信メール作成画面での処理
    // --------------------------------------------
    if (mw.PAGE == "MailSend") {
        // ヘッダーの上部に文字列追加
        $('div#common.custom').before('MailSend　送信メール作成ページ');
        $('div#common.custom').remove();
        // ヘッダーの色変更
        $('header.headbar').css('background-color', '#00b')
    }




    // --------------------------------------------
    // すべての画面共通での処理
    // --------------------------------------------

});
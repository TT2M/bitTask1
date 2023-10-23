<?
if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
	die();
?>
<!DOCTYPE html>
<html>
	<head>
		<?$APPLICATION->ShowHead();?>
		<title><?$APPLICATION->ShowTitle();?></title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="utf-8">
		<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link href="<?= SITE_TEMPLATE_PATH?>/assets/css/common.css" rel="stylesheet">
	</head>
	<body>
		<div id="panel">
			<?$APPLICATION->ShowPanel();?>
		</div>

define(function (require) {
	"use strict";
	var $ = require('jquery'),
		_ = require('underscore'),
		Gonrin = require('gonrin');
	return [
		{
			"collectionName": "user",
			"route": "user/collection",
			"$ref": "app/user/js/CollectionView",
		},
		{
			"collectionName": "user",
			"route": "user/model(/:id)",
			"$ref": "app/user/js/ModelView",
		},

		{
			"collectionName": "role",
			"route": "role/collection",
			"$ref": "app/role/js/CollectionView",
		},
		{
			"collectionName": "role",
			"route": "role/model(/:id)",
			"$ref": "app/role/js/ModelView",
		},
		{
			"collectionName": "role",
			"route": "role/model(/:id)",
			"$ref": "app/role/js/ModelView",
		},


		{
			"collectionName": "quocgia",
			"route": "quocgia/collection",
			"$ref": "app/DanhMuc/QuocGia/view/CollectionView",
		},
		{
			"collectionName": "quocgia",
			"route": "quocgia/model(/:id)",
			"$ref": "app/DanhMuc/QuocGia/view/ModelView",
		},

		{
			"collectionName": "tinhthanh",
			"route": "tinhthanh/collection",
			"$ref": "app/DanhMuc/TinhThanh/view/CollectionView",
		},
		{
			"collectionName": "tinhthanh",
			"route": "tinhthanh/model(/:id)",
			"$ref": "app/DanhMuc/TinhThanh/view/ModelView",
		},

		{
			"collectionName": "quanhuyen",
			"route": "quanhuyen/collection",
			"$ref": "app/DanhMuc/QuanHuyen/view/CollectionView",
		},
		{
			"collectionName": "quanhuyen",
			"route": "quanhuyen/model(/:id)",
			"$ref": "app/DanhMuc/QuanHuyen/view/ModelView",
		},

		{
			"collectionName": "xaphuong",
			"route": "xaphuong/collection",
			"$ref": "app/DanhMuc/XaPhuong/view/CollectionView",
		},
		{
			"collectionName": "xaphuong",
			"route": "xaphuong/model(/:id)",
			"$ref": "app/DanhMuc/XaPhuong/view/ModelView",
		},




		{

			"route": "baocao/phuluc1/model",
			"$ref": "app/baocao/phuluc1/js/ModelView",
		},
		{
			"collectionName": "hsqlsuckhoevabenhtatnguoilaodong",
			"route": "hsqlsuckhoevabenhtatnguoilaodong/collection",
			"$ref": "app/baocao/phuluc2/js/CollectionView",
		},
		{
			"collectionName": "hsqlsuckhoevabenhtatnguoilaodong",
			"route": "hsqlsuckhoevabenhtatnguoilaodong/model(/:id)",
			"$ref": "app/baocao/phuluc2/js/ModelView",
		},

		{
			"collectionName": "hscctainanlaodongtaicosolaodong",
			"route": "hscctainanlaodongtaicosolaodong/collection",
			"$ref": "app/baocao/phuluc3/js/CollectionView",
		},
		{
			"collectionName": "hscctainanlaodongtaicosolaodong",
			"route": "hscctainanlaodongtaicosolaodong/model(/:id)",
			"$ref": "app/baocao/phuluc3/js/ModelView",
		},


		{

			"route": "baocao/phuluc4/model",
			"$ref": "app/baocao/phuluc4/js/ModelView",
		},
		{

			"route": "baocao/phuluc5/model",
			"$ref": "app/baocao/phuluc5/js/ModelView",
		},
		{

			"route": "baocao/phuluc6/model",
			"$ref": "app/baocao/phuluc6/js/ModelView",
		},
		{

			"collectionName": "sotheodoicongtachuanluyensocuucapcuutainoilamviec",
			"route": "sotheodoicongtachuanluyensocuucapcuutainoilamviec/collection",
			"$ref": "app/baocao/phuluc7/js/CollectionView",
		},
		{

			"collectionName": "sotheodoicongtachuanluyensocuucapcuutainoilamviec",
			"route": "sotheodoicongtachuanluyensocuucapcuutainoilamviec/model(/:id)",
			"$ref": "app/baocao/phuluc7/js/ModelView",
		},
		{

			"collectionName": "baocaoytelaodongcuacosolaodong",
			"route": "baocaoytelaodongcuacosolaodong/collection",
			"$ref": "app/baocao/phuluc8/js/CollectionView",
		},
		{

			"collectionName": "baocaoytelaodongcuacosolaodong",
			"route": "baocaoytelaodongcuacosolaodong/model(/:id)",
			"$ref": "app/baocao/phuluc8/js/ModelView",
		},
		{

			"collectionName": "baocaohoatdongytelaodong6thangnamtuyenhuyen",
			"route": "baocaohoatdongytelaodong6thangnamtuyenhuyen/collection",
			"$ref": "app/baocao/phuluc9/js/CollectionView",
		},
		{

			"collectionName": "baocaohoatdongytelaodong6thangnamtuyenhuyen",
			"route": "baocaohoatdongytelaodong6thangnamtuyenhuyen/model(/:id)",
			"$ref": "app/baocao/phuluc9/js/ModelView",
		},
		{

			"collectionName": "baocaohoatdongytelaodong6thangnam",
			"route": "baocaohoatdongytelaodong6thangnam/collection",
			"$ref": "app/baocao/phuluc10/js/CollectionView",
		},
		{

			"collectionName": "baocaohoatdongytelaodong6thangnam",
			"route": "baocaohoatdongytelaodong6thangnam/model(/:id)",
			"$ref": "app/baocao/phuluc10/js/ModelView",
		},
		{

			"route": "baocao/phuluc11/model",
			"$ref": "app/baocao/phuluc11/js/ModelView",
		},
		{

			"route": "baocao/phuluc12/model",
			"$ref": "app/baocao/phuluc12/js/ModelView",
		},
		{

			"collectionName": "chungchidaotaovequantracmoitruonglaodong",
			"route": "chungchidaotaovequantracmoitruonglaodong/collection",
			"$ref": "app/baocao/phuluc13/js/CollectionView",
		},
		{

			"collectionName": "chungchidaotaovequantracmoitruonglaodong",
			"route": "chungchidaotaovequantracmoitruonglaodong/model(/:id)",
			"$ref": "app/baocao/phuluc13/js/ModelView",
		},

		{

			"route": "baocao2/phuluc21/model",
			"$ref": "app/baocao2/phuluc21/js/ModelView",
		},
		{

			"route": "baocao2/phuluc1/model",
			"$ref": "app/baocao2/phuluc1/js/ModelView",
		},
		{

			"route": "baocao2/phuluc2/model",
			"$ref": "app/baocao2/phuluc2/js/ModelView",
		},
		{

			"route": "baocao2/phuluc3/model",
			"$ref": "app/baocao2/phuluc3/js/ModelView",
		},
		{

			"route": "baocao2/phuluc4/model",
			"$ref": "app/baocao2/phuluc4/js/ModelView",
		},
		{

			"route": "baocao2/phuluc5/model",
			"$ref": "app/baocao2/phuluc5/js/ModelView",
		},
		{

			"route": "baocao2/phuluc6/model",
			"$ref": "app/baocao2/phuluc6/js/ModelView",
		},
		{

			"route": "baocao2/phuluc7/model",
			"$ref": "app/baocao2/phuluc7/js/ModelView",
		},
		{

			"route": "baocao2/phuluc8/model",
			"$ref": "app/baocao2/phuluc8/js/ModelView",
		},
		{

			"route": "baocao2/phuluc9/model",
			"$ref": "app/baocao2/phuluc9/js/ModelView",
		},
		{

			"route": "baocao2/phuluc10/model",
			"$ref": "app/baocao2/phuluc10/js/ModelView",
		},
		{

			"route": "baocao2/phuluc11/model",
			"$ref": "app/baocao2/phuluc11/js/ModelView",
		},
		{

			"route": "baocao2/phuluc12/model",
			"$ref": "app/baocao2/phuluc12/js/ModelView",
		},

	];

});



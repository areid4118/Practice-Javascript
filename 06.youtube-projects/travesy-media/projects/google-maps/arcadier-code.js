const SearchResultView = React.createClass({
   displayName: 'SearchResultView',
   render() {
       return React.createElement(IndexContainer, {
           model: this.props.model,
           resources: this.props.resources,
           Keywords: this.props.Keywords,
           SearchLocation: this.props.SearchLocation,
           CurrencyCode: this.props.CurrencyCode,
           MaxPrice: this.props.MaxPrice,
           CurrencySymbol: this.props.CurrencySymbol,
           ThemeImagePath: this.props.ThemeImagePath,
       });
   },
});
  const GoogleMapMarker = React.createClass({
   displayName: 'GoogleMapMarker',
   render() {
       return React.createElement('div', null, React.createElement('div', {
           className: 'popover-content',
       }, React.createElement('div', {
           className: 'map-desc-price',
       }, React.createElement(CommonCurrency, {
           currencyCode: this.props.CurrencyCode,
           price: this.props.Price,
           priceunit: this.props.PriceUnit,
       })), React.createElement('img', {
           src: this.props.ItemImage,
           className: 'img-tooltip-map',
       })), React.createElement('h3', {
           className: 'popover-title',
       }, this.props.ItemName));
   },
});
  const GoogleMap = React.createClass({
   displayName: 'GoogleMap',
   modelChanged() {
       for (var i, t = this.props.Items, n = 0; n < t.length; ++n) {
 i = t[n],
           this.createMarker(this.infowindow, this.latlngbounds, i, n);
}
   },
   createMarker(n, t, i) {
       const u = this; let
r;
       i.Location != null && (t.extend(new google.maps.LatLng(i.Location.Latitude, i.Location.Longitude)),
       r = new google.maps.Marker({
           position: new google.maps.LatLng(i.Location.Latitude, i.Location.Longitude),
           map: u.map,
       }),
       r.addListener('click', () => {
           let t = currencyList[i.CurrencyCode];
           isNullOrUndefined(t) && (t = '');
           n.setContent(`<div class="popover-content"><a href="${u.props.CurrentDomain}/user/item/detail/${i.NameUrl}/${i.ID}"><div class="map-desc-price">${i.CurrencyCode} ${t}${i.Price}/ ${i.PriceUnit}<\/div><img src="${i.ImageUrl}" class="img-tooltip-map"><\/a><\/div><h3 class="popover-title">${i.Name}<\/h3>`);
           n.open(map, r);
       }));
   },
   componentDidMount() {
       const r = this; const u = new google.maps.LatLng(-25.363882, 131.044922); const f = {
           zoom: 4,
           center: u,
           mapTypeId: google.maps.MapTypeId.ROADMAP,
           gestureHandling: 'greedy',
           zoomControl: !0,
       }; let i; let n; let
t;
       for (this.map = new google.maps.Map(this.refs.map, f),
       this.infowindow = new google.maps.InfoWindow(),
       this.latlngbounds = new google.maps.LatLngBounds(),
       i = new google.maps.LatLngBounds(),
       n = 0; n < this.props.Items.length; ++n) {
 t = this.props.Items[n],
           r.createMarker(this.infowindow, this.latlngbounds, t, n),
           t.Location != null && i.extend(new google.maps.LatLng(t.Location.Latitude, t.Location.Longitude));
}
       this.map.fitBounds(i);
       this.map.addListener('idle', () => {});
   },
   fetchData(n, t, i) {
       this.props.fetchData(n, t, i);
   },
   render() {
       return React.createElement('div', {
           className: 'search-map-container',
       }, React.createElement('div', {
           id: 'map',
           ref: 'map',
           className: 'map-img affix-top',
           'data-spy': 'affix',
       }));
   },
});
  var IndexContainer = React.createClass({
   displayName: 'IndexContainer',
   getInitialState() {
       return {
           model: this.props.model,
           showNoResult: this.props.model.TotalRecords === 0,
           mapModel: this.props.model,
           selectedCustomFields: [],
           categoryMenu: this.props.model.CategoryHierarchy || [],
       };
   },
   storeFront(n) {
       return `/user/merchantaccount?merchantid=${n}`;
   },
   applyFilter() {
       const n = this.state.model;
          const t = this.state.selectedCustomFields;
          const i = this;
       n.SearchFilters.MinPrice = jQuery('#start').text();
       n.SearchFilters.MaxPrice = jQuery('#end').text();
       t.length > 0 && (n.SearchFilters.CustomFieldValues = t.map((n) => n.id).toString());
       this.setState({
           model: n,
       }, () => {
           i.showFilterPreview();
           window.setTimeout(() => {
               UserSearch.applyFilter();
           }, 500);
       });
   },
   resetFilter(n, t) {
       UserSearch.resetFilter(n, t);
   },
   decodeHTMLEntities(n) {
       return n && typeof n === 'string' && (n = n.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, ''),
       n = n.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, ''),
       element.innerHTML = n,
       n = element.textContent,
       element.textContent = ''),
       n;
   },
   unit(n) {
       return typeof n !== 'undefined' && n && n !== '' && (n = n.toLowerCase(),
       n.indexOf('hour(s)') >= 0 ? n = n.replace('hour(s)', this.parseResource('strCommonWords_Hour_s', 'hour(s)')) : n.indexOf('minute(s)') >= 0 ? n = n.replace('minute(s)', this.parseResource('strCommonWords_Minute_s', 'minute(s)')) : n.indexOf('day(s)') >= 0 ? n = n.replace('day(s)', this.parseResource('strCommonWords_Day_s', 'day(s)')) : n.indexOf('week(s)') >= 0 ? n = n.replace('week(s)', this.parseResource('strCommonWords_Week_s', 'week(s)')) : n.indexOf('month(s)') >= 0 ? n = n.replace('month(s)', this.parseResource('strCommonWords_Month_s', 'month(s)')) : n.indexOf('night(s)') >= 0 ? n = n.replace('night(s)', this.parseResource('strCommonWords_Night_s', 'night(s)')) : n.indexOf('hour') >= 0 ? n = n.replace('hour', this.parseResource('strCommonWords_Hour', 'hour')) : n.indexOf('night') >= 0 ? n = n.replace('night', this.parseResource('strCommonWords_Night', 'night')) : n.indexOf('minute(s)') >= 0 ? n = n.replace('minute(s)', this.parseResource('strCommonWords_Minute_s', 'minute(s)')) : n.indexOf('day') >= 0 ? n = n.replace('day', this.parseResource('strCommonWords_Day', 'day')) : n.indexOf('week') >= 0 ? n = n.replace('week', this.parseResource('strCommonWords_Week', 'week')) : n.indexOf('month') >= 0 && (n = n.replace('month', this.parseResource('strCommonWords_Month', 'month')))),
       n !== undefined && n !== '' ? ` / ${n}` : '';
   },
   modelChanged(n) {
       const t = this;
       this.setState({
           mapModel: n,
       }, () => {
           t.refs.googleMap.modelChanged();
       });
   },
   fetchData(n, t, i) {
       let f; let r; let o; let c; let
u;
       if (this.IsLoading !== !0) {
           if (this.IsLoading = !0,
           f = null,
           r = null,
           $(".page-search .select-date > input[type='checkbox']").not(':checked')) {
               if ($('[name="start"]').val() !== '') {
                   if (isNaN(Date.parse($('[name="start"]').val()))) {
 return toastr.error('Please enter a valid start date.', 'Oops! Something went wrong.'),
                       !1;
}
                   if (Date.parse($('[name="start"]').val()) < Date.parse(new Date(moment(Date.now()).format('MM/DD/YYYY')))) {
 return toastr.error('Please select a future start date.', 'Oops! Something went wrong.'),
                       !1;
}
                   if (f = Date.parse($('[name="start"]').val()),
                   validateEndDate(!0)) r = Date.parse($('[name="end"]').val());
                   else {
 return toastr.error('Please select a start date that is lesser than the end date.', 'Oops! Something went wrong.'),
                       !1;
}
               }
               validateEndDate(!1) && (r = Date.parse($('[name="end"]').val()));
           }
           const s = parseFloat($('#start').text().replace(/,/g, ''));
              const h = parseFloat($('#end').text().replace(/,/g, ''));
              let e = '';
           $('#custom-properties input:checked').each(function () {
               e == '' ? e = $(this).attr('data-id') : e += `,${$(this).attr('data-id')}`;
           });
           o = $('#KeyWords').val() != null && $('#KeyWords').val() != undefined ? $('#KeyWords').val() : '';
           c = $('#SearchLocation').last().val() != null && $('#SearchLocation').last().val() != undefined ? $('#SearchLocation').last().val() : '';
           o = this.decodeHTMLEntities(o);
           const l = f == null ? null : new Date(f).toServerTimezone().getTime() / 1e3;
              const a = r == null ? null : new Date(new Date(r).setHours(23, 59, 59)).toServerTimezone().getTime() / 1e3;
              const v = {
               SearchLocation: encodeURI(c),
               KeyWords: encodeURI(o),
               MinPrice: s && s > 0 ? s : '',
               MaxPrice: h && h > 0 ? h : '',
               UnixTimestampFrom: l,
               UnixTimestampTo: a,
               CategoryId: $('#categoryId').val(),
               Category: $('#category').val(),
               PageNo: this.state.model.SearchFilters.PageNo,
               CustomFieldValues: e,
               Sort: $('#item-sort').val(),
               UserLatitude: $('[name=UserLatitude]').first().val(),
               UserLongitude: $('[name=UserLongitude]').first().val(),
               IsAllDates: $(".page-search .select-date > input[type='checkbox']").is(':checked'),
               SearchRadius: i,
               PanLatitude: n,
               PanLongitude: t,
           };
           i >= 32 && (u = this,
           $.ajax({
               type: 'POST',
               url: '/User/Search/MapsAjaxUpdateSearchResult',
               data: v,
               success(n) {
                   u.modelChanged(n);
                   u.IsLoading = !1;
                   u.setRatings();
               },
               error() {
                   u.IsLoading = !1;
               },
               dataType: 'json',
           }));
       }
   },
   setRatings() {
       $.fn.stars = function () {
           return $(this).each(function () {
               $(this).html($('<span />').width(Math.max(0, Math.min(5, parseFloat($(this).html()))) * 19.8));
               this.dataset.isRendered = !0;
           });
       };
jQuery('span.stars').stars();
   },
   parseResource(n, t) {
       return typeof this.props.resources[n] !== 'undefined' ? this.props.resources[n] : t;
   },
   renderHierarchyCategories() {
       const n = this;
          const t = this;
       return console.log('gggg'),
       console.log(t.props),
       this.state.model.CategoryHierarchy != null ? React.createElement('div', {
           className: 'category-items',
       }, React.createElement('ul', {
           className: 'category-nav',
       }, this.props.model.CategoryHierarchy.map((t) => n.renderHierarchyCategory(t, !0)))) : '';
   },
   renderHierarchyCategory(n, t) {
       const r = this;
          const i = n.ParentCategoryID != undefined && n.ParentCategoryID != null && n.ParentCategoryID > 0 ? n.ParentCategoryID : n.ID;
       return n.ChildCategories != undefined && n.ChildCategories != null && n.ChildCategories.length > 0 ? React.createElement('li', {
           className: 'hasSub top-level',
           key: n.ID,
           'data-first-level': t ? 1 : 0,
       }, React.createElement('a', {
           href: `/User/Search/SearchByKeywords?CategoryId=${n.ID}&category=${n.Name}&MinPrice=${this.state.model.SearchFilters.MinPrice}&MaxPrice=${this.state.model.SearchFilters.MaxPrice}&IsAllDates=${this.state.model.SearchFilters.IsAllDates}${commonModule.getCategoryLinkParameters()}`,
           'data-isparent': '1',
           'data-categoryparentid': i,
           'data-categoryid': n.ID,
           id: `categoryid_${n.ID}`,
       }, n.Name, ' '), React.createElement('ul', {
           className: 'submenu',
       }, n.ChildCategories.map((n) => r.renderHierarchyCategory(n)))) : React.createElement('li', {
           className: 'top-level',
           key: n.ID,
           'data-first-level': t ? 1 : 0,
       }, React.createElement('a', {
           href: `/User/Search/SearchByKeywords?CategoryId=${n.ID}&category=${n.Name}&MinPrice=${this.state.model.SearchFilters.MinPrice}&MaxPrice=${this.state.model.SearchFilters.MaxPrice}&IsAllDates=${this.state.model.SearchFilters.IsAllDates}${commonModule.getCategoryLinkParameters()}`,
           'data-isparent': '0',
           'data-categoryparentid': i,
           'data-categoryid': n.ID,
           id: `categoryid_${n.ID}`,
       }, n.Name));
   },
   backCategoryMenu(n) {
       backMenu(n);
   },
   deselectCustomValue(n) {
       const i = this;
          const t = this.state.selectedCustomFields;
          const r = t.findIndex((t) => t.id == n.id);
       t.splice(r, 1);
       this.setState({
           selectedCustomFields: t,
       }, () => {
           jQuery(`.options-filter input[type=checkbox]#chkOpt${n.id}`).prop('checked', !1);
           i.showFilterPreview();
       });
   },
   onSelectedCustomValue(n, t) {
       const i = this;
       n.target.checked ? (function () {
           const r = i;
              const n = i.state.selectedCustomFields;
           n.push({
               id: t.Id,
               name: t.Name,
           });
           i.setState({
               selectedCustomFields: n,
           }, () => {
               $(r.refs.filterPreview).show();
           });
       }()) : this.deselectCustomValue({
           id: t.Id,
           name: t.Name,
       });
   },
   showFilterPreview() {
       const n = this.state.model.SearchFilters;
          const t = this.state.selectedCustomFields;
       n.MinPrice || n.MaxPrice || t.length != 0 ? $('.filter-preview').show() : $('.filter-preview').hide();
   },
   componentDidMount() {
       const r = this; const t = this.state.model.SearchFilters; const i = this.state.model.CustomProperties; let
n;
       t && i && (n = t.CustomFieldValues,
       n && (function () {
           const t = n.split(',');
           t && t.length > 0 && (function () {
               const n = [];
               i.forEach((i) => {
                   i.Values.forEach((i) => {
                       t.findIndex((n) => parseInt(n) == i.Id) >= 0 && ($(`.options-filter input[type=checkbox]#chkOpt${i.Id}`).prop('checked', !0),
                       n.push({
                           id: i.Id,
                           name: i.Name,
                       }));
                   });
               });
               r.setState({
                   selectedCustomFields: n,
               });
           }());
       }()));
       this.showFilterPreview();
       this.setRatings();
       $('[name=SearchLocation]').last().autocomplete({
           source(n, t) {
               const i = $('[name=SearchLocation]').last().val() != null && $('[name=SearchLocation]').last().val() != undefined ? $('[name=SearchLocation]').last().val() : '';
               $.ajax({
                   url: '/user/search/GooglePlaceSearch',
                   dataType: 'json',
                   data: {
                       query: i,
                   },
                   success(n) {
                       t(n);
                   },
                   error() {
                       t([]);
                   },
               });
           },
       });
       $('[name=SearchLocation]').first().autocomplete({
           source(n, t) {
               const i = $('[name=SearchLocation]').last().val() != null && $('[name=SearchLocation]').last().val() != undefined ? $('[name=SearchLocation]').last().val() : '';
               $.ajax({
                   url: '/user/search/GooglePlaceSearch',
                   dataType: 'json',
                   data: {
                       query: i,
                   },
                   success(n) {
                       t(n);
                   },
                   error() {
                       t([]);
                   },
               });
           },
       });
   },
   componentDidUpdate() {
       this.setRatings();
   },
   renderPriceRangeFilter() {
       const r = this; const n = this.state.model.SearchFilters; let t; let
i;
       return n.MinPrice || n.MaxPrice ? (t = n.MinPrice || '0.00',
       i = n.MaxPrice || this.props.MaxPrice,
       React.createElement('div', {
           className: 'filter-values filter-values-price',
       }, this.props.CurrencySymbol, React.createElement('span', {
           className: 'filterStart',
       }, t), '  -   ', this.props.CurrencySymbol, React.createElement('span', {
           className: 'filterEnd',
       }, i), React.createElement('a', {
           onClick(n) {
               return UserSearch.appliedFilterCloseElement(n, r.state.model.MaxPrice);
           },
           href: 'javascript:void(0);',
       }, React.createElement('i', {
           className: 'icon icon-close',
       })))) : !1;
   },
   renderListValues(n) {
       const t = this;
       return n.map((n) => React.createElement('span', {
               className: 'fancy-checkbox',
               key: n.Id,
           }, React.createElement('input', {
               id: `chkOpt${n.Id}`,
               type: 'checkbox',
               name: `chkOpt${n.Id}`,
               'data-id': n.Id,
               onChange(i) {
                   t.onSelectedCustomValue(i, n);
               },
           }), React.createElement('label', {
               htmlFor: `chkOpt${n.Id}`,
           }, n.Name)));
   },
   renderCustomProperties() {
       const n = this;
       return this.state.model.CustomProperties.map((t, i) => React.createElement('div', {
               className: 'virtual-table',
               key: i,
           }, React.createElement('div', {
               className: 'virtual-cell leftsec',
           }, React.createElement('span', {
               className: 'small-title',
           }, t.Name)), React.createElement('div', {
               className: 'virtual-cell text-left',
           }, n.renderListValues(t.Values))));
   },
   renderCustomProperty() {
       return this.state.model.CustomProperties.length > 0 ? React.createElement('div', {
           id: 'custom-properties',
           className: 'options-filter',
       }, this.renderCustomProperties()) : !1;
   },
   renderItems() {
       const n = this;
       return this.state.model.Items.map((n) => React.createElement('div', {
               className: 'item-box item-box-size col-sm-6 col-xs-6',
               style: {
                   display: 'block',
                   width: '50%',
               },
               key: n.ID,
               'data-guid': n.Guid,
               'data-id': n.ID,
           }, React.createElement('div', {
               className: 'item-box-inner',
           }, React.createElement('div', {
               className: 'item-box-top',
           }, React.createElement('a', {
               href: `/User/Item/Detail/${n.NameUrl}/${n.ID}`,
           }, React.createElement('img', {
               src: n.ImageUrl,
           })), React.createElement('div', {
               className: 'item-price',
           }, React.createElement('a', {
               href: `/User/Item/Detail/${n.NameUrl}/${n.ID}`,
           }, React.createElement(CommonCurrency, {
               currencyCode: n.CurrencyCode,
               price: n.Price,
           }), ' / ', n.PriceUnit))), React.createElement('div', {
               className: 'item-box-bottom',
           }, React.createElement('div', {
               className: 'item-fix-table',
           }, React.createElement('div', {
               className: 'review-item-star',
           }, React.createElement('span', {
               className: 'stars',
           }, n.AverageRating == null || n.AverageRating < 1 ? 0 : n.AverageRating)), React.createElement('div', {
               className: 'item-fix-tablecell',
           }, React.createElement('p', null, React.createElement('a', {
               href: `/User/Item/Detail/${n.NameUrl}/${n.ID}`,
           }, n.Name))), React.createElement('div', {
               className: 'item-img-item-owner',
           }, React.createElement('a', {
               href: `/user/merchantaccount?merchantid=${n.UserID}`,
           }, React.createElement('img', {
               src: n.MerchantImage,
               alt: 'images',
           }))), React.createElement('div', {
               className: 'item-sec-cat-name',
           }, React.createElement('a', {
               href: `/user/merchantaccount?merchantid=${n.UserID}`,
           }, n.MerchantName)))))));
   },
   renderEachPage() {
       return React.createElement('li', {
           className: 'paginationjs-prev J-paginationjs-previous',
           title: 'Previous page',
       }, React.createElement('a', {
           href: '#',
       }, '«'));
   },
   renderPaging() {
       const u = this; let i; const t = []; let r; let
n;
       for (this.state.model.PageCount !== 0 && (i = this.state.model.SearchFilters.PageNo > 1 ? React.createElement('li', {
           className: 'paginationjs-prev J-paginationjs-previous',
           title: 'Previous page',
           key: 'page-previous',
       }, React.createElement('a', {
           href: '#',
       }, '«')) : React.createElement('li', {
           className: 'paginationjs-prev J-paginationjs-previous disabled',
           title: 'Previous page',
           key: 'page-previous',
       }, React.createElement('a', null, '«'))),
       n = 1; n <= this.state.model.PageCount; n++) {
 n === this.state.model.SearchFilters.PageNo ? t.push(React.createElement('li', {
               className: 'paginationjs-page J-paginationjs-page active',
               key: `page-${n}`,
           }, React.createElement('a', null, n))) : t.push(React.createElement('li', {
               className: 'paginationjs-page J-paginationjs-page',
               key: `page-${n}`,
           }, React.createElement('a', {
               href: '#',
           }, n)));
}
       return this.state.model.PageCount !== 0 && (r = this.state.model.SearchFilters.PageNo < this.state.model.PageCount ? React.createElement('li', {
           className: 'paginationjs-next',
           key: 'page-next',
       }, React.createElement('a', {
           href: '#',
       }, '»')) : React.createElement('li', {
           className: 'paginationjs-next disabled',
           key: 'page-next',
       }, React.createElement('a', null, '»'))),
       React.createElement('ul', null, i, t, r);
   },
   render() {
       const n = this;
       return React.createElement('div', null, React.createElement('div', {
           className: 'container category-container',
       }, React.createElement('div', {
           className: 'category-menu',
           style: {
               width: '60%',
           },
           'data-spy': 'affix',
           'data-offset-top': '79',
       }, React.createElement('div', {
           className: 'category-menu-top',
       }, React.createElement('div', {
           className: 'category-navbar',
       }, React.createElement('ul', null, React.createElement('li', null, React.createElement('button', {
           id: 'toggle-categorynav',
           className: 'btn categorynav',
       }, React.createElement('i', {
           className: 'icon icon-menu',
       }))), React.createElement('li', null, React.createElement('a', {
           href: 'javascript:void(0)',
       }, this.parseResource('strCommonWords_All', 'All'))))), React.createElement('div', {
           className: 'breadcrumb',
       }, ' ', this.parseResource('strCommonWords_Search', 'Search'), ' > ', React.createElement('span', {
           className: 'search-text',
       }, this.props.Keywords != null ? this.props.Keywords : this.props.model.SelectedCategoryName)), this.renderHierarchyCategories()), React.createElement('div', {
           className: 'category line',
       }), React.createElement('div', {
           className: 'category-filter',
       }, React.createElement('div', {
           className: 'filter-top-mobile',
       }, React.createElement('div', {
           className: 'input-daterange',
           id: 'dateRangePicker',
       }, React.createElement('div', {
           className: 'lala',
       }, React.createElement('input', {
           type: 'text',
           className: 'input-small',
           name: 'date-range',
           id: 'dateRangePicker',
       }), React.createElement('label', {
           className: 'input-group-addon btn',
           htmlFor: 'start',
       }, ' ', React.createElement('span', {
           className: 'fa fa-calendar',
       }), ' '))), React.createElement('div', {
           className: 'lala select-date',
       }, React.createElement('input', {
           type: 'checkbox',
           id: 'search-all-date',
       }), React.createElement('label', null, this.parseResource('strCommonWords_AllDates', 'All Dates')))), React.createElement('div', {
           className: 'search-btn-apply',
       }, this.parseResource('strCommonWords_Apply', 'Apply'))), React.createElement('div', {
           className: 'hiddenline',
       }), React.createElement('div', {
           className: 'filter-content-section',
       }, React.createElement('div', {
           ref: 'filterPreview',
           className: 'filter-preview',
       }, this.renderPriceRangeFilter(), this.state.selectedCustomFields.map((t, i) => React.createElement('div', {
               key: i,
               className: 'filter-values',
           }, t.name, React.createElement('a', {
               href: '#',
               onClick() {
                   n.deselectCustomValue(t);
               },
           }, React.createElement('i', {
               className: 'icon icon-close',
           }))))), React.createElement('div', {
           className: 'filter-applied-value',
       }, React.createElement('div', {
           className: 'filter-row',
       }, React.createElement('span', {
           className: 'small-title',
       }, this.parseResource('strBuyer_SearchResultPage_PriceRange', 'Price range')), React.createElement('span', {
           className: 'filter-price-label',
       }, this.props.CurrencySymbol), React.createElement('span', {
           className: 'start-range',
           id: 'start',
       }, 'this.props.MinPrice'), React.createElement('span', {
           className: 'range-slider',
       }, React.createElement('input', {
           type: 'text',
           className: 'item-range',
           'data-slider-min': 1,
           'data-slider-max': this.state.model.MaxPrice,
           'data-slider-step': 0.01,
           'data-slider-value': `[1,${this.state.model.MaxPrice}]`,
           'data-slider-orientation': 'horizontal',
           'data-slider-tooltip': 'show',
       })), React.createElement('span', {
           className: 'filter-price-label',
       }, this.props.CurrencySymbol), React.createElement('span', {
           className: 'end-range',
           id: 'end',
       }, this.props.MaxPrice))), this.renderCustomProperty(), React.createElement('div', {
           style: {
               align: 'center',
           },
       }, React.createElement('div', {
           className: 'filter-actions',
       }, React.createElement('input', {
           type: 'button',
           className: 'btn btn-primary',
           id: 'reset-filter',
           value: this.parseResource('strCommonWords_Cancel', 'Cancel'),
           onClick: this.resetFilter.bind(this, 0, this.state.model.MaxPrice),
       }), React.createElement('input', {
           type: 'button',
           className: 'btn btn-primary',
           id: 'apply-filter',
           value: this.parseResource('strCommonWords_Apply', 'Apply'),
           onClick: this.applyFilter,
       }))))), React.createElement('div', {
           className: 'category-map',
           style: {
               width: '40%',
           },
       }, React.createElement('div', {
           className: 'btn-showmap showhidemap-bg',
       }, React.createElement('span', {
           className: 'showhidemap',
       }, this.parseResource('strBuyer_SearchResultPage_HideMap', 'Hide Map')), ' ', React.createElement('i', {
           className: 'fa fa-map-marker',
           'aria-hidden': 'true',
       })))), React.createElement('div', {
           className: 'wrapper-section',
       }, React.createElement('div', {
           className: 'item-list-section',
       }, React.createElement('div', {
           className: 'container',
       }, React.createElement('div', {
           className: 'search-left-content',
           style: {
               width: '60%',
           },
       }, React.createElement('div', {
           className: 'search-filter-section search-filter-hide',
           style: {
               align: 'center',
               display: 'block',
           },
       }, React.createElement('div', {
           className: 'search-filter-left',
       }, React.createElement('a', {
           id: 'toogle-filter',
           href: 'javascript:void(0);',
       }, React.createElement('span', null, this.parseResource('strBuyer_SearchResultPage_Filters', 'FILTERS')), ' ', React.createElement('i', {
           className: 'icon icon-toggle',
       })), React.createElement('div', {
           className: 'item-sorting-option',
       }, React.createElement('select', {
           name: 'item-sort',
           id: 'item-sort',
           defaultValue: 'item_asc',
       }, React.createElement('option', {
           value: 'nearest',
       }, this.parseResource('strBuyer_SearchResultPage_Item_Nearest', 'Nearest')), React.createElement('option', {
           value: 'item_desc',
       }, this.parseResource('strBuyer_SearchResultPage_Item_Newest', 'Item-Newest')), React.createElement('option', {
           value: 'item_asc',
       }, this.parseResource('strBuyer_SearchResultPage_Item_Oldest', 'Item-Oldest')), React.createElement('option', {
           value: 'price_asc',
       }, this.parseResource('strBuyer_SearchResultPage_Price_Lowest', 'Price-Lowest')), React.createElement('option', {
           value: 'price_desc',
       }, this.parseResource('strBuyer_SearchResultPage_Price_Highest', 'Price-Highest')), React.createElement('option', {
           value: 'rating_desc',
       }, this.parseResource('strBuyer_SearchResultPage_Rating_Highest', 'Rating-Highest')), React.createElement('option', {
           value: 'rating_asc',
       }, this.parseResource('strBuyer_SearchResultPage_Rating_Lowest', 'Rating-Lowest'), ' '))), React.createElement('div', {
           className: 'item-found-text',
       }, React.createElement('span', {
           className: 'item-found-count',
       }, this.state.model.TotalRecords, ' ', this.parseResource('strBuyer_SearchResultPage_ItemsFound', 'Listings found')))), React.createElement('div', {
           className: 'search-filter-right',
       })), React.createElement('div', null, React.createElement('div', {
           className: 'pull-left filter-tag',
       }, this.state.showNoResult ? React.createElement(NoResult, {
           message: this.parseResource('strBuyer_SearchResultPage_NoMatchesFound', 'We couldn’t find any matches, would you like to review your search? You can also check out what others are looking at below.'),
           ThemeImagePath: this.props.ThemeImagePath,
       }) : null)), React.createElement('section', {
           id: 'item-section',
           className: 'map-on',
       }, React.createElement('div', {
           className: 'data-container',
       }, React.createElement('div', {
           className: 'row',
           id: 'items-list',
       }, this.renderItems())), React.createElement('div', {
           id: 'pagination-items',
       }, React.createElement('div', {
           className: 'paginationjs',
       }, React.createElement('div', {
           className: 'paginationjs-pages',
       }, this.renderPaging()))), React.createElement('div', {
           id: 'dvAvtmBottom',
       }))), React.createElement(GoogleMap, {
           fetchData: this.fetchData,
           CurrencyCode: this.props.CurrencyCode,
           Items: this.state.mapModel.Items,
           CurrentDomain: this.state.model.CurrentDomain,
           ItemImageLocation: this.props.ImagePath,
           ref: 'googleMap',
       })))));
   },
});
  var NoResult = React.createClass({
   displayName: 'NoResult',
   render() {
       return React.createElement('div', {
           className: 'no-result-found',
           id: 'item-no-result-msg',
       }, React.createElement('div', {
           className: 'result-search',
       }, React.createElement('img', {
           src: `${this.props.ThemeImagePath}no_search_icon.svg`,
       })), React.createElement('div', {
           className: 'result-description',
           style: {
               width: '87%',
           },
       }, React.createElement('p', null, this.props.message)));
   },
});

(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("a44f9590-8fbb-472b-a194-6fe36e7fda00");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a44f9590-8fbb-472b-a194-6fe36e7fda00' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"caacc74a-9386-4d9b-80d1-f01844f8a011":{"roots":{"references":[{"attributes":{},"id":"17120","type":"DataRange1d"},{"attributes":{"axis":{"id":"17128"},"ticker":null},"id":"17131","type":"Grid"},{"attributes":{"overlay":{"id":"17145"}},"id":"17140","type":"LassoSelectTool"},{"attributes":{},"id":"17122","type":"DataRange1d"},{"attributes":{"toolbars":[{"id":"17146"}],"tools":[{"id":"17136"},{"id":"17137"},{"id":"17138"},{"id":"17139"},{"id":"17140"},{"id":"17141"},{"id":"17142"},{"id":"17143"}]},"id":"17172","type":"ProxyToolbar"},{"attributes":{},"id":"17142","type":"SaveTool"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17168"},"selection_policy":{"id":"17169"}},"id":"17156","type":"ColumnDataSource"},{"attributes":{},"id":"17126","type":"LinearScale"},{"attributes":{},"id":"17163","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"17128"}],"center":[{"id":"17131"},{"id":"17135"}],"left":[{"id":"17132"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"17157"}],"title":{"id":"17159"},"toolbar":{"id":"17146"},"toolbar_location":null,"x_range":{"id":"17120"},"x_scale":{"id":"17124"},"y_range":{"id":"17122"},"y_scale":{"id":"17126"}},"id":"17119","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17136","type":"ResetTool"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"17159","type":"Title"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17155","type":"Cross"},{"attributes":{},"id":"17133","type":"BasicTicker"},{"attributes":{},"id":"17129","type":"BasicTicker"},{"attributes":{},"id":"17141","type":"UndoTool"},{"attributes":{},"id":"17139","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"17144","type":"BoxAnnotation"},{"attributes":{},"id":"17168","type":"Selection"},{"attributes":{"overlay":{"id":"17144"}},"id":"17138","type":"BoxZoomTool"},{"attributes":{"children":[{"id":"17173"},{"id":"17171"}]},"id":"17174","type":"Column"},{"attributes":{"callback":null},"id":"17143","type":"HoverTool"},{"attributes":{"axis":{"id":"17132"},"dimension":1,"ticker":null},"id":"17135","type":"Grid"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"17163"},"ticker":{"id":"17133"}},"id":"17132","type":"LinearAxis"},{"attributes":{"toolbar":{"id":"17172"},"toolbar_location":"above"},"id":"17173","type":"ToolbarBox"},{"attributes":{},"id":"17137","type":"PanTool"},{"attributes":{},"id":"17169","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"17165"},"ticker":{"id":"17129"}},"id":"17128","type":"LinearAxis"},{"attributes":{},"id":"17124","type":"LinearScale"},{"attributes":{"source":{"id":"17156"}},"id":"17158","type":"CDSView"},{"attributes":{"data_source":{"id":"17156"},"glyph":{"id":"17155"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"17158"}},"id":"17157","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17136"},{"id":"17137"},{"id":"17138"},{"id":"17139"},{"id":"17140"},{"id":"17141"},{"id":"17142"},{"id":"17143"}]},"id":"17146","type":"Toolbar"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"17145","type":"PolyAnnotation"},{"attributes":{},"id":"17165","type":"BasicTickFormatter"},{"attributes":{"children":[[{"id":"17119"},0,0]]},"id":"17171","type":"GridBox"}],"root_ids":["17174"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"caacc74a-9386-4d9b-80d1-f01844f8a011","root_ids":["17174"],"roots":{"17174":"a44f9590-8fbb-472b-a194-6fe36e7fda00"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
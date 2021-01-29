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
    
      
      
    
      var element = document.getElementById("051dc181-a380-4e88-884a-e4180cd9a1f4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '051dc181-a380-4e88-884a-e4180cd9a1f4' but no matching script tag was found.")
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
                    
                  var docs_json = '{"1c03ef68-071e-4ed3-93e0-0549da31e6dc":{"roots":{"references":[{"attributes":{},"id":"35122","type":"ResetTool"},{"attributes":{},"id":"35227","type":"UnionRenderers"},{"attributes":{},"id":"35214","type":"Selection"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"35131","type":"PolyAnnotation"},{"attributes":{},"id":"35215","type":"UnionRenderers"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"35226"},"selection_policy":{"id":"35227"}},"id":"35200","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"35129","type":"HoverTool"},{"attributes":{"axis":{"id":"35118"},"dimension":1,"ticker":null},"id":"35121","type":"Grid"},{"attributes":{"children":[{"id":"35231"},{"id":"35229"}]},"id":"35232","type":"Column"},{"attributes":{"text":"mu"},"id":"35203","type":"Title"},{"attributes":{"toolbars":[{"id":"35132"},{"id":"35168"}],"tools":[{"id":"35122"},{"id":"35123"},{"id":"35124"},{"id":"35125"},{"id":"35126"},{"id":"35127"},{"id":"35128"},{"id":"35129"},{"id":"35158"},{"id":"35159"},{"id":"35160"},{"id":"35161"},{"id":"35162"},{"id":"35163"},{"id":"35164"},{"id":"35165"}]},"id":"35230","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"35131"}},"id":"35126","type":"LassoSelectTool"},{"attributes":{"toolbar":{"id":"35230"},"toolbar_location":"above"},"id":"35231","type":"ToolbarBox"},{"attributes":{"axis":{"id":"35114"},"ticker":null},"id":"35117","type":"Grid"},{"attributes":{"data_source":{"id":"35177"},"glyph":{"id":"35178"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35179"},"selection_glyph":null,"view":{"id":"35181"}},"id":"35180","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"35150"}],"center":[{"id":"35153"},{"id":"35157"}],"left":[{"id":"35154"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"35194"},{"id":"35196"},{"id":"35197"},{"id":"35198"},{"id":"35201"}],"title":{"id":"35203"},"toolbar":{"id":"35168"},"toolbar_location":null,"x_range":{"id":"35142"},"x_scale":{"id":"35146"},"y_range":{"id":"35144"},"y_scale":{"id":"35148"}},"id":"35141","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"35221"},"ticker":{"id":"35151"}},"id":"35150","type":"LinearAxis"},{"attributes":{"end":1,"start":-0.05},"id":"35144","type":"DataRange1d"},{"attributes":{},"id":"35219","type":"BasicTickFormatter"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"35219"},"ticker":{"id":"35155"}},"id":"35154","type":"LinearAxis"},{"attributes":{},"id":"35146","type":"LinearScale"},{"attributes":{"below":[{"id":"35114"}],"center":[{"id":"35117"},{"id":"35121"}],"left":[{"id":"35118"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"35180"},{"id":"35182"},{"id":"35183"},{"id":"35184"},{"id":"35187"}],"title":{"id":"35189"},"toolbar":{"id":"35132"},"toolbar_location":null,"x_range":{"id":"35106"},"x_scale":{"id":"35110"},"y_range":{"id":"35108"},"y_scale":{"id":"35112"}},"id":"35105","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"35207"},"ticker":{"id":"35119"}},"id":"35118","type":"LinearAxis"},{"attributes":{},"id":"35148","type":"LinearScale"},{"attributes":{"callback":null},"id":"35165","type":"HoverTool"},{"attributes":{},"id":"35207","type":"BasicTickFormatter"},{"attributes":{},"id":"35151","type":"BasicTicker"},{"attributes":{},"id":"35221","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"35150"},"ticker":null},"id":"35153","type":"Grid"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"35209"},"ticker":{"id":"35115"}},"id":"35114","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"35167","type":"PolyAnnotation"},{"attributes":{},"id":"35127","type":"UndoTool"},{"attributes":{},"id":"35209","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"35154"},"dimension":1,"ticker":null},"id":"35157","type":"Grid"},{"attributes":{},"id":"35155","type":"BasicTicker"},{"attributes":{},"id":"35106","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35179","type":"Circle"},{"attributes":{"overlay":{"id":"35166"}},"id":"35160","type":"BoxZoomTool"},{"attributes":{},"id":"35159","type":"PanTool"},{"attributes":{},"id":"35158","type":"ResetTool"},{"attributes":{},"id":"35164","type":"SaveTool"},{"attributes":{},"id":"35161","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"35167"}},"id":"35162","type":"LassoSelectTool"},{"attributes":{},"id":"35142","type":"DataRange1d"},{"attributes":{},"id":"35163","type":"UndoTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35158"},{"id":"35159"},{"id":"35160"},{"id":"35161"},{"id":"35162"},{"id":"35163"},{"id":"35164"},{"id":"35165"}]},"id":"35168","type":"Toolbar"},{"attributes":{},"id":"35123","type":"PanTool"},{"attributes":{},"id":"35115","type":"BasicTicker"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"35185","type":"Dash"},{"attributes":{"overlay":{"id":"35130"}},"id":"35124","type":"BoxZoomTool"},{"attributes":{},"id":"35110","type":"LinearScale"},{"attributes":{"data_source":{"id":"35186"},"glyph":{"id":"35185"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"35188"}},"id":"35187","type":"GlyphRenderer"},{"attributes":{},"id":"35112","type":"LinearScale"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"35214"},"selection_policy":{"id":"35215"}},"id":"35186","type":"ColumnDataSource"},{"attributes":{},"id":"35128","type":"SaveTool"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"35182","type":"Span"},{"attributes":{},"id":"35125","type":"WheelZoomTool"},{"attributes":{"text":"tau"},"id":"35189","type":"Title"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"35183","type":"Span"},{"attributes":{},"id":"35119","type":"BasicTicker"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"35184","type":"Span"},{"attributes":{"children":[[{"id":"35105"},0,0],[{"id":"35141"},0,1]]},"id":"35229","type":"GridBox"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35122"},{"id":"35123"},{"id":"35124"},{"id":"35125"},{"id":"35126"},{"id":"35127"},{"id":"35128"},{"id":"35129"}]},"id":"35132","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35192","type":"Circle"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"35196","type":"Span"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35212"},"selection_policy":{"id":"35213"}},"id":"35177","type":"ColumnDataSource"},{"attributes":{"source":{"id":"35186"}},"id":"35188","type":"CDSView"},{"attributes":{"source":{"id":"35177"}},"id":"35181","type":"CDSView"},{"attributes":{"source":{"id":"35191"}},"id":"35195","type":"CDSView"},{"attributes":{"source":{"id":"35200"}},"id":"35202","type":"CDSView"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"35199","type":"Dash"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"35197","type":"Span"},{"attributes":{"data_source":{"id":"35191"},"glyph":{"id":"35192"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35193"},"selection_glyph":null,"view":{"id":"35195"}},"id":"35194","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"35200"},"glyph":{"id":"35199"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"35202"}},"id":"35201","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"35166","type":"BoxAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35224"},"selection_policy":{"id":"35225"}},"id":"35191","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"35198","type":"Span"},{"attributes":{"end":1,"start":-0.05},"id":"35108","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35193","type":"Circle"},{"attributes":{},"id":"35224","type":"Selection"},{"attributes":{},"id":"35225","type":"UnionRenderers"},{"attributes":{},"id":"35212","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"35130","type":"BoxAnnotation"},{"attributes":{},"id":"35213","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35178","type":"Circle"},{"attributes":{},"id":"35226","type":"Selection"}],"root_ids":["35232"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"1c03ef68-071e-4ed3-93e0-0549da31e6dc","root_ids":["35232"],"roots":{"35232":"051dc181-a380-4e88-884a-e4180cd9a1f4"}}];
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
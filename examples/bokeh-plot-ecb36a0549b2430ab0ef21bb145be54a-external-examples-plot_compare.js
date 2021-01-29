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
    
      
      
    
      var element = document.getElementById("59acf017-385d-4daf-b369-ab0fbda1dca4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '59acf017-385d-4daf-b369-ab0fbda1dca4' but no matching script tag was found.")
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
                    
                  var docs_json = '{"fff10d57-29dd-4815-a718-dd8ea44a2d03":{"roots":{"references":[{"attributes":{},"id":"14953","type":"WheelZoomTool"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"14988","type":"MultiLine"},{"attributes":{"source":{"id":"14981"}},"id":"14985","type":"CDSView"},{"attributes":{"overlay":{"id":"14959"}},"id":"14954","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"14986"},"glyph":{"id":"14987"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14988"},"selection_glyph":null,"view":{"id":"14990"}},"id":"14989","type":"GlyphRenderer"},{"attributes":{},"id":"15008","type":"Selection"},{"attributes":{},"id":"15004","type":"Selection"},{"attributes":{},"id":"15010","type":"Selection"},{"attributes":{"data_source":{"id":"14981"},"glyph":{"id":"14982"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14983"},"selection_glyph":null,"view":{"id":"14985"}},"id":"14984","type":"GlyphRenderer"},{"attributes":{},"id":"15011","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"14933"},0,0]]},"id":"15015","type":"GridBox"},{"attributes":{"overlay":{"id":"14958"}},"id":"14952","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"14971"},"glyph":{"id":"14972"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14973"},"selection_glyph":null,"view":{"id":"14975"}},"id":"14974","type":"GlyphRenderer"},{"attributes":{},"id":"15006","type":"Selection"},{"attributes":{},"id":"14950","type":"ResetTool"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"14996","type":"Span"},{"attributes":{},"id":"14956","type":"SaveTool"},{"attributes":{},"id":"15007","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14973","type":"Triangle"},{"attributes":{},"id":"15001","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"15017"},{"id":"15015"}]},"id":"15018","type":"Column"},{"attributes":{},"id":"14934","type":"DataRange1d"},{"attributes":{"below":[{"id":"14942"}],"center":[{"id":"14945"},{"id":"14949"}],"left":[{"id":"14946"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"14974"},{"id":"14979"},{"id":"14984"},{"id":"14989"},{"id":"14994"},{"id":"14996"}],"title":{"id":"14998"},"toolbar":{"id":"14960"},"toolbar_location":null,"x_range":{"id":"14934"},"x_scale":{"id":"14938"},"y_range":{"id":"14936"},"y_scale":{"id":"14940"}},"id":"14933","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"14946"},"dimension":1,"ticker":null},"id":"14949","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"14978","type":"MultiLine"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14983","type":"Circle"},{"attributes":{"source":{"id":"14971"}},"id":"14975","type":"CDSView"},{"attributes":{},"id":"14955","type":"UndoTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"14958","type":"BoxAnnotation"},{"attributes":{"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"15006"},"selection_policy":{"id":"15007"}},"id":"14976","type":"ColumnDataSource"},{"attributes":{},"id":"14951","type":"PanTool"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15012"},"selection_policy":{"id":"15013"}},"id":"14991","type":"ColumnDataSource"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.38353713483674]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"15010"},"selection_policy":{"id":"15011"}},"id":"14986","type":"ColumnDataSource"},{"attributes":{"source":{"id":"14976"}},"id":"14980","type":"CDSView"},{"attributes":{"data_source":{"id":"14991"},"glyph":{"id":"14992"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14993"},"selection_glyph":null,"view":{"id":"14995"}},"id":"14994","type":"GlyphRenderer"},{"attributes":{},"id":"15005","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"14999"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"ticker":{"id":"14969"}},"id":"14946","type":"LinearAxis"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"14969","type":"FixedTicker"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsAoBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15008"},"selection_policy":{"id":"15009"}},"id":"14981","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"14957","type":"HoverTool"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14972","type":"Triangle"},{"attributes":{"source":{"id":"14986"}},"id":"14990","type":"CDSView"},{"attributes":{},"id":"15013","type":"UnionRenderers"},{"attributes":{"source":{"id":"14991"}},"id":"14995","type":"CDSView"},{"attributes":{},"id":"14938","type":"LinearScale"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14982","type":"Circle"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"14959","type":"PolyAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"KAWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"15004"},"selection_policy":{"id":"15005"}},"id":"14971","type":"ColumnDataSource"},{"attributes":{},"id":"14940","type":"LinearScale"},{"attributes":{"data_source":{"id":"14976"},"glyph":{"id":"14977"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14978"},"selection_glyph":null,"view":{"id":"14980"}},"id":"14979","type":"GlyphRenderer"},{"attributes":{"axis_label":"Log","formatter":{"id":"15001"},"ticker":{"id":"14943"}},"id":"14942","type":"LinearAxis"},{"attributes":{},"id":"14943","type":"BasicTicker"},{"attributes":{"end":0.5,"start":-1.5},"id":"14936","type":"DataRange1d"},{"attributes":{"toolbar":{"id":"15016"},"toolbar_location":"above"},"id":"15017","type":"ToolbarBox"},{"attributes":{"toolbars":[{"id":"14960"}],"tools":[{"id":"14950"},{"id":"14951"},{"id":"14952"},{"id":"14953"},{"id":"14954"},{"id":"14955"},{"id":"14956"},{"id":"14957"}]},"id":"15016","type":"ProxyToolbar"},{"attributes":{},"id":"14999","type":"BasicTickFormatter"},{"attributes":{},"id":"15012","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14950"},{"id":"14951"},{"id":"14952"},{"id":"14953"},{"id":"14954"},{"id":"14955"},{"id":"14956"},{"id":"14957"}]},"id":"14960","type":"Toolbar"},{"attributes":{"axis":{"id":"14942"},"ticker":null},"id":"14945","type":"Grid"},{"attributes":{"text":""},"id":"14998","type":"Title"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"14977","type":"MultiLine"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14992","type":"Circle"},{"attributes":{},"id":"15009","type":"UnionRenderers"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"14987","type":"MultiLine"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14993","type":"Circle"}],"root_ids":["15018"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"fff10d57-29dd-4815-a718-dd8ea44a2d03","root_ids":["15018"],"roots":{"15018":"59acf017-385d-4daf-b369-ab0fbda1dca4"}}];
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
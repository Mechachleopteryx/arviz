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
    
      
      
    
      var element = document.getElementById("ec258aef-d218-4494-aba0-d02888b15a58");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ec258aef-d218-4494-aba0-d02888b15a58' but no matching script tag was found.")
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
                    
                  var docs_json = '{"0ca9854d-ff7c-4740-8cfd-3aae07558be6":{"roots":{"references":[{"attributes":{},"id":"40099","type":"Selection"},{"attributes":{},"id":"40081","type":"BasicTickFormatter"},{"attributes":{},"id":"40090","type":"Selection"},{"attributes":{},"id":"40100","type":"UnionRenderers"},{"attributes":{},"id":"39991","type":"LinearScale"},{"attributes":{},"id":"40104","type":"UnionRenderers"},{"attributes":{},"id":"40091","type":"UnionRenderers"},{"attributes":{},"id":"39993","type":"LinearScale"},{"attributes":{"axis_label":"Chain","formatter":{"id":"40079"},"ticker":{"id":"40046"}},"id":"39965","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"39978","type":"PolyAnnotation"},{"attributes":{"children":[{"id":"40110"},{"id":"40108"}]},"id":"40111","type":"Column"},{"attributes":{},"id":"40101","type":"Selection"},{"attributes":{},"id":"40102","type":"UnionRenderers"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40084"},"selection_policy":{"id":"40085"}},"id":"40022","type":"ColumnDataSource"},{"attributes":{"source":{"id":"40022"}},"id":"40026","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40024","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"39969"},{"id":"39970"},{"id":"39971"},{"id":"39972"},{"id":"39973"},{"id":"39974"},{"id":"39975"},{"id":"39976"}]},"id":"39979","type":"Toolbar"},{"attributes":{},"id":"39975","type":"SaveTool"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40030","type":"VBar"},{"attributes":{"axis":{"id":"39965"},"dimension":1,"ticker":null},"id":"39968","type":"Grid"},{"attributes":{"data_source":{"id":"40022"},"glyph":{"id":"40023"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40024"},"selection_glyph":null,"view":{"id":"40026"}},"id":"40025","type":"GlyphRenderer"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"40033","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40086"},"selection_policy":{"id":"40087"}},"id":"40028","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40029","type":"VBar"},{"attributes":{},"id":"39974","type":"UndoTool"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40035","type":"VBar"},{"attributes":{"source":{"id":"40028"}},"id":"40032","type":"CDSView"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40036","type":"VBar"},{"attributes":{"axis":{"id":"39995"},"ticker":null},"id":"39998","type":"Grid"},{"attributes":{},"id":"39953","type":"DataRange1d"},{"attributes":{"callback":null},"id":"40010","type":"HoverTool"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"40039","type":"Span"},{"attributes":{"data_source":{"id":"40028"},"glyph":{"id":"40029"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40030"},"selection_glyph":null,"view":{"id":"40032"}},"id":"40031","type":"GlyphRenderer"},{"attributes":{"axis_label":"Chain","formatter":{"id":"40094"},"ticker":{"id":"40074"}},"id":"39999","type":"LinearAxis"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"40096"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"39996"}},"id":"39995","type":"LinearAxis"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40041","type":"VBar"},{"attributes":{},"id":"39996","type":"BasicTicker"},{"attributes":{},"id":"40094","type":"BasicTickFormatter"},{"attributes":{},"id":"39962","type":"BasicTicker"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40088"},"selection_policy":{"id":"40089"}},"id":"40034","type":"ColumnDataSource"},{"attributes":{"source":{"id":"40034"}},"id":"40038","type":"CDSView"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40042","type":"VBar"},{"attributes":{"axis":{"id":"39999"},"dimension":1,"ticker":null},"id":"40002","type":"Grid"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"40045","type":"Span"},{"attributes":{"data_source":{"id":"40034"},"glyph":{"id":"40035"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40036"},"selection_glyph":null,"view":{"id":"40038"}},"id":"40037","type":"GlyphRenderer"},{"attributes":{},"id":"40096","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40023","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40052","type":"VBar"},{"attributes":{},"id":"39972","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"40011"}},"id":"40005","type":"BoxZoomTool"},{"attributes":{},"id":"40004","type":"PanTool"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40090"},"selection_policy":{"id":"40091"}},"id":"40040","type":"ColumnDataSource"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"40081"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"39962"}},"id":"39961","type":"LinearAxis"},{"attributes":{},"id":"40003","type":"ResetTool"},{"attributes":{"source":{"id":"40040"}},"id":"40044","type":"CDSView"},{"attributes":{},"id":"40009","type":"SaveTool"},{"attributes":{},"id":"40006","type":"WheelZoomTool"},{"attributes":{"source":{"id":"40050"}},"id":"40054","type":"CDSView"},{"attributes":{"overlay":{"id":"40012"}},"id":"40007","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"40040"},"glyph":{"id":"40041"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40042"},"selection_glyph":null,"view":{"id":"40044"}},"id":"40043","type":"GlyphRenderer"},{"attributes":{},"id":"40084","type":"Selection"},{"attributes":{},"id":"40008","type":"UndoTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"40003"},{"id":"40004"},{"id":"40005"},{"id":"40006"},{"id":"40007"},{"id":"40008"},{"id":"40009"},{"id":"40010"}]},"id":"40013","type":"Toolbar"},{"attributes":{},"id":"40105","type":"Selection"},{"attributes":{},"id":"40085","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"39952"},0,0],[{"id":"39988"},0,1]]},"id":"40108","type":"GridBox"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40099"},"selection_policy":{"id":"40100"}},"id":"40050","type":"ColumnDataSource"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"40055","type":"Span"},{"attributes":{"axis":{"id":"39961"},"ticker":null},"id":"39964","type":"Grid"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"40073","type":"Span"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40051","type":"VBar"},{"attributes":{"callback":null},"id":"39976","type":"HoverTool"},{"attributes":{"toolbar":{"id":"40109"},"toolbar_location":"above"},"id":"40110","type":"ToolbarBox"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40058","type":"VBar"},{"attributes":{"toolbars":[{"id":"39979"},{"id":"40013"}],"tools":[{"id":"39969"},{"id":"39970"},{"id":"39971"},{"id":"39972"},{"id":"39973"},{"id":"39974"},{"id":"39975"},{"id":"39976"},{"id":"40003"},{"id":"40004"},{"id":"40005"},{"id":"40006"},{"id":"40007"},{"id":"40008"},{"id":"40009"},{"id":"40010"}]},"id":"40109","type":"ProxyToolbar"},{"attributes":{"data_source":{"id":"40050"},"glyph":{"id":"40051"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40052"},"selection_glyph":null,"view":{"id":"40054"}},"id":"40053","type":"GlyphRenderer"},{"attributes":{},"id":"39970","type":"PanTool"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"40061","type":"Span"},{"attributes":{"ticks":[0,1,2,3]},"id":"40074","type":"FixedTicker"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40101"},"selection_policy":{"id":"40102"}},"id":"40056","type":"ColumnDataSource"},{"attributes":{},"id":"40086","type":"Selection"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40057","type":"VBar"},{"attributes":{"source":{"id":"40068"}},"id":"40072","type":"CDSView"},{"attributes":{"text":"mu"},"id":"40076","type":"Title"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40063","type":"VBar"},{"attributes":{},"id":"40103","type":"Selection"},{"attributes":{"data_source":{"id":"40068"},"glyph":{"id":"40069"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40070"},"selection_glyph":null,"view":{"id":"40072"}},"id":"40071","type":"GlyphRenderer"},{"attributes":{"source":{"id":"40056"}},"id":"40060","type":"CDSView"},{"attributes":{},"id":"40087","type":"UnionRenderers"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40064","type":"VBar"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"40067","type":"Span"},{"attributes":{},"id":"39969","type":"ResetTool"},{"attributes":{"data_source":{"id":"40056"},"glyph":{"id":"40057"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40058"},"selection_glyph":null,"view":{"id":"40060"}},"id":"40059","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40069","type":"VBar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"40011","type":"BoxAnnotation"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40103"},"selection_policy":{"id":"40104"}},"id":"40062","type":"ColumnDataSource"},{"attributes":{},"id":"39959","type":"LinearScale"},{"attributes":{"source":{"id":"40062"}},"id":"40066","type":"CDSView"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40070","type":"VBar"},{"attributes":{"ticks":[0,1,2,3]},"id":"40046","type":"FixedTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"39977","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"40062"},"glyph":{"id":"40063"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40064"},"selection_glyph":null,"view":{"id":"40066"}},"id":"40065","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"39977"}},"id":"39971","type":"BoxZoomTool"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"40027","type":"Span"},{"attributes":{},"id":"40088","type":"Selection"},{"attributes":{},"id":"39957","type":"LinearScale"},{"attributes":{},"id":"39955","type":"DataRange1d"},{"attributes":{"overlay":{"id":"39978"}},"id":"39973","type":"LassoSelectTool"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40105"},"selection_policy":{"id":"40106"}},"id":"40068","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"39961"}],"center":[{"id":"39964"},{"id":"39968"},{"id":"40027"},{"id":"40033"},{"id":"40039"},{"id":"40045"}],"left":[{"id":"39965"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"40025"},{"id":"40031"},{"id":"40037"},{"id":"40043"}],"title":{"id":"40048"},"toolbar":{"id":"39979"},"toolbar_location":null,"x_range":{"id":"39953"},"x_scale":{"id":"39957"},"y_range":{"id":"39955"},"y_scale":{"id":"39959"}},"id":"39952","subtype":"Figure","type":"Plot"},{"attributes":{"text":"tau"},"id":"40048","type":"Title"},{"attributes":{},"id":"40079","type":"BasicTickFormatter"},{"attributes":{},"id":"40106","type":"UnionRenderers"},{"attributes":{},"id":"40089","type":"UnionRenderers"},{"attributes":{"below":[{"id":"39995"}],"center":[{"id":"39998"},{"id":"40002"},{"id":"40055"},{"id":"40061"},{"id":"40067"},{"id":"40073"}],"left":[{"id":"39999"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"40053"},{"id":"40059"},{"id":"40065"},{"id":"40071"}],"title":{"id":"40076"},"toolbar":{"id":"40013"},"toolbar_location":null,"x_range":{"id":"39953"},"x_scale":{"id":"39991"},"y_range":{"id":"39955"},"y_scale":{"id":"39993"}},"id":"39988","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"40012","type":"PolyAnnotation"}],"root_ids":["40111"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"0ca9854d-ff7c-4740-8cfd-3aae07558be6","root_ids":["40111"],"roots":{"40111":"ec258aef-d218-4494-aba0-d02888b15a58"}}];
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
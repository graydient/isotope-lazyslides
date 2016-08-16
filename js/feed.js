$( document ).ready(function() {
  var feedURL = 'http://blog.graydientcreative.com/feed/', // Your feed URL
      outputEl = '#feed', // Output element
      countLimit = 3; // Amount of items to show

  $.ajax({
      url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(feedURL),
      dataType: 'json',
      success: function(data) {
        
        var $ul = $('<ul />').appendTo(outputEl),
            entries = data.responseData.feed.entries;
              
        for (var i = 0, length = countLimit; i < length; i++) {
          
          var title = entries[i].title,
              contentSnippet = entries[i].contentSnippet,
              link = entries[i].link,
              $li = $('<li />').appendTo($ul),
              
          $link = $('<a class="feed-title" target="_blank" href="' + link + '" title="' + title + '"></a>').appendTo($li);
          $link.append('<span>' + title + '</span>');
          $li.append('<div class="feed-content"><p>' + contentSnippet + '</p></div>');
          
        }
        
      }
    
   });

 });
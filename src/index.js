

$(function(){

  $.getJSON(
    "https://www.reddit.com/r/gaming.json",
    function foo(data){

      $.each(
        data.data.children.slice(0,5),
        function (req, res){
          var group = $('<div class="groups"></div>');
          group.append($('<img/>').attr('src', res.data.thumbnail));
          var title = $('<h4 class="poop"></h4>');
          var titleLink=$('<a></a>').attr('href', res.data.url).text(res.data.title);
          group.append(title.append(titleLink));


          group.append( '<br>' + 'A link that this nerd used: ' + res.data.domain);
          group.append( '<br>' + 'You Dont Suck:' + ' ' + res.data.ups);
          group.append( '<br>' + 'You Suck:' + ' '  + res.data.downs);
          group.append( '<hr>');
          $('.reddit').append(group);
        })
        .error(function(){alert('Retry that search silly human');})

    })

})
  $('#link_id').on('click', loadIt);







function loadIt(){
var linkID = $('#linkID').val();
  if(linkID == 'undefined' || linkID == '' || linkID == null){
    alert('Please enter text only')
  } else{
    console.log(linkID);
  $.getJSON("https://www.reddit.com/r/" + linkID + ".json",function grabContent(stuff){
    var group = $('<div class="groups"></div>');
    $.each(stuff.data.children.slice(0,25),function (req, res){
          group.append($('<img/>').attr('src', res.data.thumbnail));
          var title = $('<h4 class="poop"></h4>');
          var titleLink = $('<a></a>').attr('href', res.data.url).text(res.data.title);
          group.append(title.append(titleLink));
          group.append( 'You Dont Suck:' + ' ' + res.data.ups);
          group.append( 'You Suck:' + ' '  + res.data.downs);
          group.append( '<hr>');
        })
        $('.reddit').empty().append(group);

    }) .fail(function(){
      alert('Retry that search silly human..this aint no subreddit')

    })
  }
}
  $('#send').on('click', loadIt);

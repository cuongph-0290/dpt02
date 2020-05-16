export const fetchData = ({ url, method, data, callback }) => {
  $.ajax({
    url: url,
    method: method || 'POST',
    data: {
      ...(data || {}),
      csrfmiddlewaretoken: $('input[name="csrfmiddlewaretoken"]').val(),
    }
  }).done(response => callback && callback(response))
}

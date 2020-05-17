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

export const removeEmptyValue = (object) => {
  var newObject = object

  for (const key in newObject)
    { if (newObject[key] === '') delete(newObject[key]) }

  return newObject
}

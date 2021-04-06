const form = document.getElementById('get-gif');
const ul = document.getElementById('profiles');

const addProfile = (profile) => {
  const li = document.createElement('li');
  const img = document.createElement('img');
  li.textContent = `Name: ${profile.name}`;
  img.src = profile.gif;
  img.width = '200';
  li.append(img);
  ul.append(li);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  fetch('/api/v1/profiles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: formData.get('name'),
      word: formData.get('word'),
    }),
  })
    .then((res) => res.json())
    .then(addProfile);
});

fetch('/api/v1/profiles')
  .then((res) => res.json())
  .then((profiles) => profiles.forEach(addProfile));

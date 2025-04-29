const settingsJSON = [
    {
      name: "Nature",
      icon: "leaf",
      iconcolor: "green",
      cssfile: "themes/nature.css",
      backgroundanimationfile: "background/nature.gif"
    },
    {
      name: "Dark",
      icon: "moon",
      iconcolor: "white",
      cssfile: "themes/dark.css",
      backgroundanimationfile: "background/dark.gif"
    },
    {
      name: "Light",
      icon: "sun",
      iconcolor: "orange",
      cssfile: "themes/light.css",
      backgroundanimationfile: "background/light.gif"
    },
    {
      name: "Cyber",
      icon: "bolt",
      iconcolor: "cyan",
      cssfile: "themes/cyber.css",
      backgroundanimationfile: "background/cyber.gif"
    },
    {
      name: "Minimal",
      icon: "circle",
      iconcolor: "gray",
      cssfile: "themes/minimal.css",
      backgroundanimationfile: "background/minimal.gif"
    }
  ];
  
  function saveSettings(settings) {
    localStorage.setItem('hedgehogSettings', JSON.stringify(settings));
  }
  
  function loadSettings() {
    return JSON.parse(localStorage.getItem('hedgehogSettings')) || {
      theme: "Nature",
      particles: false,
      cloakBlank: false,
      cloakBlob: false
    };
  }
  
  function applySettings(settings) {
    const theme = settingsJSON.find(t => t.name === settings.theme);
    document.getElementById("theme-css").href = theme.cssfile;
    document.getElementById("background-animation").style.backgroundImage = `url('${theme.backgroundanimationfile}')`;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const settings = loadSettings();
    applySettings(settings);
  
    const themeSelect = document.getElementById('theme-select');
    settingsJSON.forEach(theme => {
      const option = document.createElement('option');
      option.value = theme.name;
      option.textContent = theme.name;
      if (theme.name === settings.theme) option.selected = true;
      themeSelect.appendChild(option);
    });
  
    themeSelect.addEventListener('change', () => {
      settings.theme = themeSelect.value;
      applySettings(settings);
      saveSettings(settings);
    });
  
    document.getElementById('particles-toggle').checked = settings.particles;
    document.getElementById('cloak-blank').checked = settings.cloakBlank;
    document.getElementById('cloak-blob').checked = settings.cloakBlob;
  
    document.getElementById('particles-toggle').addEventListener('change', e => {
      settings.particles = e.target.checked;
      saveSettings(settings);
    });
  
    document.getElementById('cloak-blank').addEventListener('change', e => {
      settings.cloakBlank = e.target.checked;
      saveSettings(settings);
    });
  
    document.getElementById('cloak-blob').addEventListener('change', e => {
      settings.cloakBlob = e.target.checked;
      saveSettings(settings);
    });
  
    document.getElementById('settings-button').addEventListener('click', () => {
      document.getElementById('settings-modal').classList.toggle('hidden');
    });
  
    document.getElementById('close-settings').addEventListener('click', () => {
      document.getElementById('settings-modal').classList.add('hidden');
    });
  
    setTimeout(() => {
      document.getElementById('loading').style.display = 'none';
    }, 2000);
  });
  
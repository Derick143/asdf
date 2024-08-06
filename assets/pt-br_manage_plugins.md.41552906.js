import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.0e8ae64e.js";const h=JSON.parse('{"title":"Plugins","description":"","frontmatter":{},"headers":[],"relativePath":"pt-br/manage/plugins.md","filePath":"pt-br/manage/plugins.md","lastUpdated":1687069487000}'),o={name:"pt-br/manage/plugins.md"},e=l(`<h1 id="plugins" tabindex="-1">Plugins <a class="header-anchor" href="#plugins" aria-label="Permalink to &quot;Plugins&quot;">​</a></h1><blockquote><p>Hi, we&#39;ve recently migrated our docs and added some new pages. If you would like to help translate this page, see the &quot;Edit this page&quot; link at the bottom of the page.</p></blockquote><p>Plugins são como <code>asdf</code> sabe lidar com diferentes ferramentas, tais quais Node.js, Ruby, Elixir etc.</p><p>Veja <a href="/pt-br/plugins/create.html">Criando Plugins</a> para a API do plugin usada para suportar mais ferramentas.</p><h2 id="adicionar" tabindex="-1">Adicionar <a class="header-anchor" href="#adicionar" aria-label="Permalink to &quot;Adicionar&quot;">​</a></h2><p>Adicione os plugins via sua Url Git:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">asdf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">plugin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">git-ur</span><span style="color:#E1E4E8;">l</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;"># asdf plugin add elm https://github.com/vic/asdf-elm</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">asdf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">plugin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">git-ur</span><span style="color:#24292E;">l</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;"># asdf plugin add elm https://github.com/vic/asdf-elm</span></span></code></pre></div><p>ou pelo nome abreviado dentro do repositório de plugins:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">asdf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">plugin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;"># asdf plugin add erlang</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">asdf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">plugin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;"># asdf plugin add erlang</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">Recommendation</p><p>Prefira o método mais longo <code>git-url</code>, pois ele é independente do repositório de nome abreviado.</p></div><h2 id="listar-instalados" tabindex="-1">Listar Instalados <a class="header-anchor" href="#listar-instalados" aria-label="Permalink to &quot;Listar Instalados&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">asdf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">plugin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span></span>
<span class="line"><span style="color:#6A737D;"># asdf plugin list</span></span>
<span class="line"><span style="color:#6A737D;"># java</span></span>
<span class="line"><span style="color:#6A737D;"># nodejs</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">asdf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">plugin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span></span>
<span class="line"><span style="color:#6A737D;"># asdf plugin list</span></span>
<span class="line"><span style="color:#6A737D;"># java</span></span>
<span class="line"><span style="color:#6A737D;"># nodejs</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">asdf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">plugin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--urls</span></span>
<span class="line"><span style="color:#6A737D;"># asdf plugin list</span></span>
<span class="line"><span style="color:#6A737D;"># java            https://github.com/halcyon/asdf-java.git</span></span>
<span class="line"><span style="color:#6A737D;"># nodejs          https://github.com/asdf-vm/asdf-nodejs.git</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">asdf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">plugin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--urls</span></span>
<span class="line"><span style="color:#6A737D;"># asdf plugin list</span></span>
<span class="line"><span style="color:#6A737D;"># java            https://github.com/halcyon/asdf-java.git</span></span>
<span class="line"><span style="color:#6A737D;"># nodejs          https://github.com/asdf-vm/asdf-nodejs.git</span></span></code></pre></div><h2 id="listar-todos-nomes-abreviados-no-repositorio" tabindex="-1">Listar todos nomes abreviados no repositório <a class="header-anchor" href="#listar-todos-nomes-abreviados-no-repositorio" aria-label="Permalink to &quot;Listar todos nomes abreviados no repositório&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">asdf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">plugin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">all</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">asdf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">plugin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span><span style="color:#24292E;"> </span><span style="color:#032F62;">all</span></span></code></pre></div><p>Veja <a href="https://github.com/asdf-vm/asdf-plugin-template" target="_blank" rel="noreferrer">Plugins Shortname Index</a> para toda a lista de nomes curtos de plugins.</p><h2 id="atualizar" tabindex="-1">Atualizar <a class="header-anchor" href="#atualizar" aria-label="Permalink to &quot;Atualizar&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">asdf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">plugin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--all</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">asdf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">plugin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--all</span></span></code></pre></div><p>Se você quiser atualizar um pacote específico, apenas use.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">asdf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">plugin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;"># asdf plugin update erlang</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">asdf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">plugin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;"># asdf plugin update erlang</span></span></code></pre></div><p>Esta atualização irá buscar o último <em>commit</em> na <em>branch</em> padrão no <em>origin</em> de seu respositório. Plugins e atualizações das versões estão sendo desenvolvidas (<a href="https://github.com/asdf-vm/asdf/pull/916" target="_blank" rel="noreferrer">#916</a>)</p><h2 id="remover" tabindex="-1">Remover <a class="header-anchor" href="#remover" aria-label="Permalink to &quot;Remover&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">asdf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">plugin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remove</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;"># asdf plugin remove erlang</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">asdf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">plugin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remove</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;"># asdf plugin remove erlang</span></span></code></pre></div><p>Removendo o plugin irá remover todas as instalações feitas com o plugin. Isso pode ser usado como um atalho para apagar/remover sujeiras de versões não utilizadas de uma ferramenta.</p><h2 id="sincronizar-nome-abreviado-no-repositorio" tabindex="-1">Sincronizar nome abreviado no repositório <a class="header-anchor" href="#sincronizar-nome-abreviado-no-repositorio" aria-label="Permalink to &quot;Sincronizar nome abreviado no repositório&quot;">​</a></h2><p>O nome abreviado do repositório é sincronizado em seu máquina local e periodicamente atualizado. Esse período pode ser determinado com o seguinte método:</p><ul><li>comandos <code>asdf plugin add &lt;name&gt;</code> ou <code>asdf plugin list all</code> disparam a sincronização</li><li>ocorre uma sincronização se não houver nenhuma nos últimos <code>X</code> minutos</li><li><code>X</code> por padrão é <code>60</code>, mas pode ser mudado em <code>.asdfrc</code> via as opções do <code>plugin_repository_last_check_duration</code>. Seja mais em <a href="/pt-br/manage/configuration.html">asdf documentação de configuração</a>.</li></ul>`,27),p=[e];function t(r,c,i,d,y,u){return a(),n("div",null,p)}const E=s(o,[["render",t]]);export{h as __pageData,E as default};

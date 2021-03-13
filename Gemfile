# frozen_string_literal: true

source "https://rubygems.org"
#gemspec

#gem "jekyll", ENV["JEKYLL_VERSION"] if ENV["JEKYLL_VERSION"]

gem "minima", "~> 2.5"

# Emulate GitHub Pages locally
gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end

gem "kramdown-parser-gfm" if ENV["JEKYLL_VERSION"] == "~> 3.9"

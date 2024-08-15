# Origin

In our live show ([Schrödinger Hat]('https://www.schroedinger-hat.it')) we had the necessity to upload an audio file from a given Youtube video automatically to your Anchor.fm account.

It's very useful in a scenario where you have a YouTube account and also a podcast at Spotify through Anchor.fm.

Being that the case, we decided to build it for the open source community.

## How does it work?

The action will start every time you push a change on the `episode.json` file. Into this file you need to specify the YouTube id of your video.

The action uses a docker image built over Ubuntu. It takes some time to setup the environment before running the script.

::prose-alert{icon="terminal"}
#title:
NOTE:

#description
For the script to run successfully it is necessary for there to be at least one episode manually published on Anchor.fm, as the steps to publish on a brand new Anchor.fm account are different and the automation will break.
::

## Running as a GitHub Action

You can use the latest version of this action from the [GitHub Actions marketplace](https://github.com/marketplace/actions/upload-episode-from-youtube-to-anchor-fm).
In the repository root directory add a `episode.json` file containing your YouTube video id, e.g.:

```json [episode.json]
{
  "id": "nHCXZC2InAA"
}
```
Then create a GitHub action in the `.github/workflows` directory with this `yaml`:

```yaml [upload-test.yml]
name: Upload Episode from YouTube To Anchor.Fm

on:
  push:
    paths:
      - episode.json
    branches: [main]

jobs:
  upload_episode:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Upload Episode from YouTube To Anchor.Fm
        uses: Schrodinger-Hat/youtube-to-anchorfm@v2.4.0
        env:
          ANCHOR_EMAIL: ${{ secrets.ANCHOR_EMAIL }}
          ANCHOR_PASSWORD: ${{ secrets.ANCHOR_PASSWORD }}
          SPOTIFY_EMAIL: ${{ secrets.SPOTIFY_EMAIL }}
          SPOTIFY_PASSWORD: ${{ secrets.SPOTIFY_PASSWORD }}
          EPISODE_PATH: /github/workspace
```

::prose-alert{icon="terminal"}
#title:
NOTE:

#description
You need to set up the secrets for `ANCHOR_EMAIL` and `ANCHOR_PASSWORD`. This environment variables are mandatory as they specify the sign in account.
Instead the `SPOTIFY_EMAIL` and `SPOTIFY_PASSWORD` are not mandatory but can still be set, if needed, and will be used for the new login form if the env variable `ANCHOR_LOGIN` is set to false.
::

## Environmental Variables

### Login Type

Setting the `ANCHOR_LOGIN` to true makes the script login with the old anchor login type. Instead setting it to false makes the script login with the spotify account. By default the value is true.

```yaml [env.yml]
env:
  ANCHOR_LOGIN: true
```

### Draft Mode
By setting the `SAVE_AS_DRAFT`, the new episode will be published as a draft. This can be useful if you need someone else's approval before actual publication.

```yaml [env.yml]
env:
  SAVE_AS_DRAFT: true
```

### Audio conversion options

[ffmpeg](https://ffmpeg.org/) is used to convert the video to MP3. It's possible to pass arguments to ffmpeg with `POSTPROCESSOR_ARGS` environment variable.

See [-postprocessor-args](https://github.com/yt-dlp/yt-dlp#post-processing-options) for syntax and options

The example below convert the video to mono audio.

```yaml [env.yml]
env:
  POSTPROCESSOR_ARGS: 'ExtractAudio+ffmpeg:-ac 1'
```

To convert to mono audio, remove initial silence and apply fade-in:

```yaml [env.yml]
# remove initial silence quieter than -50dB
env:
  POSTPROCESSOR_ARGS: 'ExtractAudio+ffmpeg:-ac 1 -af silenceremove=1:0:-50dB,afade=t=in:d=5'
```

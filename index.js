
import {Octokit} from 'octokit'
import core from '@actions/core';

async function main(token,doc,repo,rc){
    JSON.parse(rc)

    const octokit = new Octokit({token})
      
    await octokit.request('POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches', {
        owner: 'annaliseai',
        repo: 'annalise-release-candidates',
        workflow_id: 'dispatch.yml',
        ref: 'develop',
        inputs: {
          doc,
          repo,
          rc
        }
      })
}

const token = core.getInput('token')
const doc = core.getInput('doc')
const repo = core.getInput('repo')
const rc = core.getInput('rc')

main(token,doc,repo,rc)
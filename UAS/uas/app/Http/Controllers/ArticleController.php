<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = \App\Models\Article::all();
 
        return $articles->toJson();
    }
 
    public function store(Request $request)
    {
        $validatedData = $request->validate([
          'nim' => 'required',
          'kelas' => 'required',
          'nama' => 'required',
          'judul' => 'required',
          'keterangan' => 'required',
        ]);
 
        $project = \App\Models\Article::create([
          'nim' => $validatedData['nim'],
          'kelas' => $validatedData['kelas'],
          'nama' => $validatedData['nama'],
          'judul' => $validatedData['judul'],
          'keterangan' => $validatedData['keterangan'],
        ]);
 
        $msg = [
            'success' => true,
            'message' => 'Judul berhasil dibuat!'
        ];
 
        return response()->json($msg);
    }
 
    public function getArticle($id) // for edit and show
    {
        $article = \App\Models\Article::find($id);
 
        return $article->toJson();
    }
 
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'nim' => 'required',
            'kelas' => 'required',
            'nama' => 'required',
            'judul' => 'required',
            'keterangan' => 'required',
        ]);
 
        $article = \App\Models\Article::find($id);
        $article->nim = $validatedData['nim'];
        $article->kelas = $validatedData['kelas'];
        $article->nama = $validatedData['nama'];
        $article->judul = $validatedData['judul'];
        $article->keterangan = $validatedData['keterangan'];
        $article->save();
 
        $msg = [
            'success' => true,
            'message' => 'Judul Skripsi berhasil diupdate!'
        ];
 
        return response()->json($msg);
    }
 
    public function delete($id)
    {
        $article = \App\Models\Article::find($id);
        if(!empty($article)){
            $article->delete();
            $msg = [
                'success' => true,
                'message' => 'Judul Skirpsi berhasil dihapus!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'Judul Skirpsi gagal dihapus!'
            ];
            return response()->json($msg);
        }
    }
}
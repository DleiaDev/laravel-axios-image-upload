@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header text-center">Profile image</div>

                <div class="card-body">

                  <!-- Upload image form -->
                  <form id="form">
                    <div
                      class="image"
                      style="background-image: url(@php echo $image @endphp)">
                        <input id="file" type="file" onchange="validateImage()">
                    </div>
                  </form>

                  <div id="loader">
                    <img src="/img/loader.gif">
                  </div>

                </div>
            </div>
        </div>
    </div>
</div>
@endsection
